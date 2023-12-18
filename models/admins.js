const client = require("../db/conf");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
async function register(req, res) {
  let { name, username, password, department } = req.body;
  let resonse = await client.query(`SELECT * FROM admins WHERE username = '${username}'`)
  
  if (resonse.rowCount !== 0) {
    res.send({
      success: false,
      message: "username and phone already exit",
    });
  }
  else {
    const hasPasswrod =  bcrypt.hashSync(password, 10);
    const result = await client.query(`INSERT INTO admins (name,department,username, password) VALUES ('${name}','${department}','${username}','${hasPasswrod}') RETURNING *`)
    let user = result.rows[0];
    user['rule'] = "admin";
    var token = jwt.sign(user, "shhhhh");
    const userWithToken = {
      name: name,
      username: username,
      department: department,
      token: token,
    }
    res.send({
      success: true,
      user: userWithToken,
    });
  }
}
async function login(req, res) {
  let { username, password } = req.body;
  const result = await client.query(
    `SELECT * FROM admins WHERE username = '${username}'`
  );
  if (result.rowCount === 0)
    res.send({ success: false, msg: "User not found" });
  else {
    let user = result.rows[0];
    user['rule'] = "admin";
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      var token = jwt.sign(user, "shhhhh");
      const userwithTokwn = {
        name:user['name'],
        username:user["username"],
        department:user["department"],
        token:token,
      }
      res.send({ success: true, user:userwithTokwn });
    } 
    else {
      res.send({ success: false, msg: "Wrong password!" });
    }
  
  }

}
module.exports = {
  register,
  login,
};