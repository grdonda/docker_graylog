const Gelf = require("gelf");
const getEnvConfig = require("../config");

const config = getEnvConfig();

const settings = {
  graylogPort: config.graylog.port,
  graylogHostname: config.graylog.hostname,
  connection: config.graylog.connection,
};

const connection = () => new Gelf(settings);

module.exports = message = ({ host, short_message, full_message, level }) => {
  const payload = {
    version: "1.1",
    host: host,
    short_message: short_message,
    full_message: full_message,
    level: level,
    facility: 'graylog-application-poc'
  };
  const gelf = connection();
  gelf.emit("gelf.log", payload);
};

