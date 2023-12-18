const express = require('express')
const app = express()
const port = 3000; 
const users = require("./routers/users");
const products = require("./routers/products");
const orders = require("./routers/orders");
const admins = require("./routers/admins");
const productsAdmins = require("./routers/dasboard/products");
const ordersAdmins = require("./routers/dasboard/orders");
const checkUser = require("./middlewares/check_user");
const checkadmins = require("./middlewares/check_admin");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use("/api/v1/users", users);
app.use("/api/v1/products",products);
app.use("/api/v1/orders",checkUser,orders);
app.use("/api/v1/dasboard",admins);
app.use("/api/v1/dasboard/product",checkadmins,productsAdmins);
app.use("/api/v1/dasboard/orders",checkadmins,ordersAdmins);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
