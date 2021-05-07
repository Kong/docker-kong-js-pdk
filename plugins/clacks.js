class ClacksPlugin {
  constructor(config) {
    this.config = config;
  }

  async access(kong) {
    const prefix = this.config.use_prefix ? "X-" : "";
    await kong.response.setHeader(
      `${prefix}Clacks-Overhead`,
      "GNU Terry Pratchett"
    );
  }
}

module.exports = {
  Plugin: ClacksPlugin,
  Schema: [{ use_prefix: { type: "boolean", default: true } }],
  Version: "0.1.0",
  Priority: 0,
};
