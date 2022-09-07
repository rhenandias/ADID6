const { delay } = require("./delay");

module.exports = {
  async fry(amount) {
    console.log("Aquecendo a frigideira para o bacon");
    await delay(3000);

    console.log(`Colocando ${amount} fatias de bacon na frigideira`);

    console.log("Cozinhando o primeiro lado das fatias de bacon");
    await delay(3000);

    for (let i = 0; i < amount; i++) {
      console.log(`Virando a fatia ${i + 1} de bacon`);
    }

    console.log("Cozinhando o segundo lado das fatias de bacon");
    await delay(3000);

    console.log("Colocando os bacons fritos no prato");
  },
};
