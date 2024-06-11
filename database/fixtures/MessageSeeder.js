const AbstractSeeder = require("./AbstractSeeder");

class MessageSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "message", truncate: true });
  }

  run() {
    const getTime = () => {
      const now = new Date();
      return now;
    };

    const messages = [
      {
        content: "Bonjour, ceci est un message.",
        author: "Captain Obvious",
        creation_date: getTime(),
      },
      {
        content:
          "C'est Toto, il va à l'école. La maitresse leur demande de faire une phrase avec le mot 'hameçon'. Toto répond 'Quand je suis allé à la pêche, j'avais bien pris avec moi mes hameçons'. La maitresse le félicite, puis c'est le tour de Johnny. Johnny répond 'Que... Je suis allé acheter des nouvelles santiags, mais... que... hameçon trop petites'.",
        author: "Toto",
        creation_date: getTime(),
      },
      {
        content: "Salut mon chéri, c'est Tata Suzanne!",
        author: "Tata",
        creation_date: getTime(),
      },
      {
        content: "Win the yes, need the no, to win... against the no",
        author: "Jean-Pierre Raffarin",
        creation_date: getTime(),
      },
      {
        content: "Je ne vais pas m'énerver !",
        author: "Xavier Dang",
        creation_date: getTime(),
      },
    ];

    messages.forEach((message) => {
      this.insert(message);
    });
  }
}

module.exports = MessageSeeder;
