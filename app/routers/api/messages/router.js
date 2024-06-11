const express = require("express");

const router = express.Router();

const {
  create,
  read,
  update,
  destroy,
} = require("../../../controllers/messageActions");

router.get("/read", read);

router.post("/create", create);

router.put("/update", update);

router.delete("/destroy", destroy);

module.exports = router;
