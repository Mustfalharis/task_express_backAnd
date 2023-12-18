var jwt = require("jsonwebtoken");

async function checkUser(req, res, next) {
  let token = req.headers.token;
  jwt.verify(token, "shhhhh", function (err, decoded) {
    if (decoded) {
        if(decoded.rule = "admin"){
            req.rule = decoded.rule
            req.userId = decoded.id;
          next();
        }
    } else res.status(401).send({ success: false, msg: "Unauthorized!" });
  });
}
module.exports = checkUser;