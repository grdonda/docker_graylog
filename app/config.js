const settings = {
  local: {
    port: 3000,
    graylog: {
      port: 12201,
      connectionType: "udp",
      host: "0.0.0.0",
      maxChunkSizeWan: 1420,
      maxChunkSizeLan: 8154,
    },
  },
  dev: {},
  qa: {},
  prod: {},
};

module.exports = getEnvConfig = () => settings['local'];
