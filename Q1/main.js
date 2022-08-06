let acertos = 0;
let n = 10000000;

let start = new Date();

for (let i = 0; i < n; i++) {
  x = Math.random();
  y = Math.random();

  if (x * x + y * y <= 1.0) acertos++;
}

const res = (4.0 * acertos) / n;

let end = new Date();
let elapsedTime = new Date(end - start).toISOString().slice(11, -1);

console.log(`Valor de Pi calculado após ${n} iterações: ${res}`);
console.log(`Tempo gasto no procedimento: ${elapsedTime}`);
