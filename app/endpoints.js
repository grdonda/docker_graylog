const log = require("./gelf/resource");

module.exports = endpoints = {
  home: (req, res, next) => {
    res.status(200).send("API rodando...");
  },
  input: (req, res, next) => {
    log({
      host: "myhost.com.br",
      short_message: "Testando",
      full_message: "Testando as mensagens por completo",
      level: "6",
    });
    res.status(200).send("Log para teste executado. Verifique o graylog");
  },
};
