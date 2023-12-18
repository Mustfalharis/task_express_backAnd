
const express = require("express");
const {getProducts} = require("../models/products");
const router = express.Router();

router.get("/",getProducts);


module.exports = router;