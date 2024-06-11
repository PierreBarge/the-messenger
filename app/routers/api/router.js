const express = require("express");

const router = express.Router();

const messagesRouter = require("./messages/router");

router.use("/messages", messagesRouter);

module.exports = router;
