const client = require("../../db/conf");
async function getProducts(req, res) {
    const { search, page = 1, pageSize = 10 } = req.body;
    let query = `SELECT * FROM products`;
    if (search) {
        query += ` WHERE name ILIKE '%${search}%' `
    }
    let offset = (page - 1) * pageSize;
    query += ` LIMIT ${pageSize} OFFSET ${offset}`;
    try {
        const result = await client.query(query);
        res.send({ success: true, prodducts: result.rows });
    } catch (error) {
        res.send({ success: false, msg: error });
    }
}

async function addProdcut(req, res) {
    let { name, price, discount, image, active } = req.body
    try {
        await client.query(`INSERT INTO products (name, price, discount, image, active) VALUES ('${name}', '${price}', '${discount}', '${image}', '${active}')`);
        res.send({ success: true, message: "add products successful" });
    } catch (error) {
        res.send({ success: true, message: "Error" });
    }
}
async function deleteProdcut(req, res) {
    let id = req.params.id;
    try {
        await client.query(`DELETE FROM products  WHERE id = '${id}' `);
        res.send({ success: true, message: "DELETE products successful" });
    } catch (error) {
        res.send({ success: true, message: "Error" });
    }
}
async function deleteProdcut(req, res) {
    let id = req.params.id;
    try {
        await client.query(`DELETE FROM products  WHERE id = '${id}' `);
        res.send({ success: true, message: "DELETE products successful" });
    } catch (error) {
        res.send({ success: true, message: "Error" });
    }
}
async function updateProdcut(req, res) {
    let id = req.params.id;
    let { name, price, discount, image, active } = req.body
    try {
        await client.query(`UPDATE products
        SET
          name = '${name}',
          price = '${price}',
          discount = ${discount},
          image = '${image}',
          active = ${active}
          WHERE id = '${id}'
          `);
        res.send({ success: true, message: "UPDETE products successful" });
    } catch (error) {
        res.send({ success: true, message: "Error" });
    }
}

module.exports = {
    getProducts,
    addProdcut,
    deleteProdcut,
    updateProdcut
};
