

const express = require("express");
const {getProducts,addProdcut,deleteProdcut,updateProdcut} = require("../../models/dasboard/products");
const router = express.Router();

router.get("/",getProducts);
router.post("/",addProdcut);
router.delete("/:id",deleteProdcut);
router.put("/:id",updateProdcut);




module.exports = router;