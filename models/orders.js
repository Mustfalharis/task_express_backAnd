const client = require("../db/conf");

async function addOrder(req, res){
 const {itemId,address,count,statu} = req.body;
  const userId = req.userId;
 try {
    client.query(`INSERT INTO orders (user_id, item_id, count, address, status) VALUES ('${userId}', '${itemId}', '${count}', '${address}', '${statu}')`)
    res.send({ success: true, message: "add order successful" });
 } catch (error) {
    res.send({ success: false, message: error});
 }
 }
module.exports = {
    addOrder,
  };