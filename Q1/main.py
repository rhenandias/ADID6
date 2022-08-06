#!/usr/bin/python
from random import seed
from random import random
from datetime import datetime
from time import time

seed(datetime.now())

n = 10000000
acertos = 0

inicio = time()

for i in range(n):
    x = random()
    y = random()
    if x * x + y * y <= 1.0:
        acertos = acertos + 1

final = time() - inicio

print("Valor final: " + str(4 * acertos / n))
print("Tempo gasto no procedimento: " + str(final))
