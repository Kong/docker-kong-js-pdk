const yaml = require("js-yaml");
class JsonToYamlPlugin {
  async response(kong) {
    // Convert the body from JSON to YAML
    if ((await kong.response.getSource()) == "service") {
      let body = await kong.service.response.getRawBody();
      body = yaml.dump(JSON.parse(body));

      // Capture the HTTP response code
      const code = await kong.response.getStatus();

      // Send back the response
      await kong.response.exit(code, body);
    }
  }
}

module.exports = {
  Plugin: JsonToYamlPlugin,
  Schema: [],
  Version: "0.1.0",
  Priority: 0,
};
