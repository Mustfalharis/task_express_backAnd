
const express = require("express");
const {getProducts} = require("../models/products");
const router = express.Router();

router.get("/view",getProducts);


module.exports = router;