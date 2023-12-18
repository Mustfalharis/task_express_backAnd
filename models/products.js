const client = require("../db/conf");

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

module.exports = {
  getProducts,
};