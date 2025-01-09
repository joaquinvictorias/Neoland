const express = require("express");
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require("../controllers/userController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

router
    .route("/")
    .get(getAllUsers)
    .post(createUser);

router
    .route("/:id")
    .get(getOneUser)
    .put(authenticate, updateUser)
    .delete(deleteUser);

module.exports = router;