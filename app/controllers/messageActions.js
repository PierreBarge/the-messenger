const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const message = req.body;
  try {
    const insertId = await tables.item.create(message);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const read = async (req, res) => {
  const messagesFromDB = await tables.message.read();
  res.json(messagesFromDB);
};

const update = async (req, res, next) => {
  const message = req.body;
  try {
    await tables.item.update(message);
    res.status(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const message = req.body;
  try {
    await tables.item.destroy(message);
    res.status(200);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, read, update, destroy };
