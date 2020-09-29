const logService = require("./service");

module.exports = log = (message) => {
  console.log('mensagem ', message)
  return logService(message);
};
