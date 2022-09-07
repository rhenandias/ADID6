const { delay } = require("./delay");

module.exports = {
  async toast(slices) {
    for (let i = 0; i < slices; i++) {
      console.log("Colocando uma fatia de pão na torradeira");
    }

    console.log("Iniciando tostagem dos  pães");
    await delay(3000);

    console.log("Removendo pães da torradeira e colocando no prato");
  },

  async applyJam(slices) {
    for (let i = 0; i < slices; i++) {
      console.log(`Colocando geléia na fatia ${i + 1} de pão`);
    }
  },

  async applyButter(slices) {
    for (let i = 0; i < slices; i++) {
      console.log(`Colocando manteiga na fatia ${i + 1} de pão`);
    }
  },
};
