class PokemonEvolutionPlugin {
  async response(kong) {
    if ((await kong.response.getSource()) == "service") {
      let body = JSON.parse(await kong.service.response.getRawBody());

      const chain = this.extractPokemon(body.chain);

      const code = await kong.response.getStatus();
      await kong.response.exit(code, JSON.stringify(chain));
    }
  }

  extractPokemon(p) {
    const evolve = { name: p.species.name, to: [] };
    if (p.evolves_to) {
      for (let t of p.evolves_to) {
        evolve.to.push(this.extractPokemon(t));
      }
    }
    return evolve;
  }
}

module.exports = {
  Plugin: PokemonEvolutionPlugin,
  Schema: [],
  Version: "0.1.0",
  Priority: 0,
};
