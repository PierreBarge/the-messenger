const MessageRepository = require("./models/MessageRepository");

const tables = {};

tables.message = new MessageRepository();

module.exports = tables;
