const express = require("express");
const { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder } = require("../controllers/orderController");

const router = express.Router();

router
    .route("/")
    .get(getAllOrders)
    .post(createOrder);

router
    .route("/:id")
    .get(getOneOrder)
    .put(updateOrder)
    .delete(deleteOrder);

module.exports = router;