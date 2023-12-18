

const express = require("express");
const {addOrder} = require("../models/orders");
const router = express.Router();

router.post("/",addOrder);


module.exports = router;