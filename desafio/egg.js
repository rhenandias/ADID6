const { delay } = require("./delay");

module.exports = {
  async fry(amount) {
    console.log("Aquecendo a frigideira dos ovos");
    await delay(3000);

    console.log(`Quebrando ${amount} ovo(s)`);

    console.log("Fritando os ovos");
    await delay(3000);

    console.log("Colocando os ovos fritos no prato");
  },
};
