

const express = require("express");
const {addOrder} = require("../models/orders");
const router = express.Router();

router.post("/add",addOrder);


module.exports = router;