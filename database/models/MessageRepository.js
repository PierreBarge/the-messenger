const AbstractRepository = require("./AbstractRepository");

class MessageRepository extends AbstractRepository {
  constructor() {
    super({ table: "message" });
  }

  getTime() {
    const now = new Date();
    return now;
  }

  async create(message) {
    const [result] = await this.database.query(
      `insert into ${
        this.table
      } (content, author, creation_date) values (?, ?, ${this.getTime()})`,
      [message.content, message.author]
    );
    return result.insertId;
  }

  async read() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(message) {
    await this.database.query(
      `update ${
        this.table
      } set content = ?, modification_date = ${this.getTime()} where id = ?`,
      [message.content, message.id]
    );
  }

  async destroy(message) {
    await this.database.query(`delete from ${this.table} where id = ?`, [
      message.id,
    ]);
  }
}

module.exports = MessageRepository;
