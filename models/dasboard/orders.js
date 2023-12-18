const client = require("../../db/conf");

async function getOrders(req, res) {
    const { page = 1, pageSize = 10 } = req.body;
    let query = `SELECT *,(orders.count * products.price) Final_Price  FROM orders
    INNER JOIN users on users.id = orders.user_id 
    INNER JOIN products on products.id = orders.user_id
    `;
    let offset = (page - 1) * pageSize;
    query += ` LIMIT ${pageSize} OFFSET ${offset}`;
    try {
        const result = await client.query(query);
        res.send({ success: true, prodducts: result.rows });
    } catch (error) {
        res.send({ success: false, msg: error });
    }
}
async function changeStatus(req, res) {
    let id = req.params.id;
    const {stuatus } = req.body;
    
    try {
        const result = await client.query(`UPDATE orders 
        SET 
        status = '${stuatus}'
        WHERE id  = '${id}' `);
        res.send({ success: true, prodducts: "update orders successful" });
    } catch (error) {
        res.send({ success: false, msg: error });
    }
}

module.exports = {
    getOrders,
   changeStatus,
};
