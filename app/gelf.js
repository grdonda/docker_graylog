const Gelf = require("gelf");

const defaults = {
  graylogPort: 12201,
  graylogHostname: "0.0.0.0",
  connection: "udp",
  maxChunkSizeWan: 1420,
  maxChunkSizeLan: 8154,
};

const gelf = new Gelf(defaults);

module.exports = gelf;
