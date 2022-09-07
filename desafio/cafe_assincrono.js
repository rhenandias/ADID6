const { delay } = require("./delay");

const bacon = require("./bacon");
const coffee = require("./coffee");
const egg = require("./egg");
const toast = require("./toast");
const juice = require("./juice");

async function breads() {
  await toast.applyButter(2);
  await toast.toast(2);
  await toast.applyJam(2);
  return;
}

async function main() {
  console.log("Iniciando preparo do café");

  let start = new Date();

  await coffee.pour();

  await Promise.allSettled([egg.fry(2), bacon.fry(3), breads()]);

  await juice.pour();

  console.log("O café está pronto!");

  let elapsed = new Date(new Date() - start).toISOString().slice(11, -1);
  console.log("Tempo gasto:", elapsed);
}

main();
