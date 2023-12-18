


const express = require("express");
const {getOrders,changeStatus} = require("../../models/dasboard/orders");
const router = express.Router();
router.get("/",getOrders);
router.put("/changeStatus/:id",changeStatus);



module.exports = router;