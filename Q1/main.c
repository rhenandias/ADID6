#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <time.h>
#include <math.h>

int main()
{
  srand(time(NULL));
  struct timeval inicio, final;
  double deltaT;

  int acertos;
  unsigned int n = 10000000;

  gettimeofday(&inicio, NULL);

  for (unsigned int i = 0; i < n; i++)
  {
    float x = (double)rand() / (double)RAND_MAX;
    float y = (double)rand() / (double)RAND_MAX;

    if (pow(x, 2) + pow(y, 2) <= 1.0)
      acertos++;
  }

  double res = 4.0 * acertos / (double)n;

  gettimeofday(&final, NULL);

  deltaT = (final.tv_sec + final.tv_usec / 1000000.0) - (inicio.tv_sec + inicio.tv_usec / 1000000.0);

  printf("Valor final obtido após %d iteracoes: %f\n", n, res);
  printf("Tempo gasto no procedimento: %f segundos\n", deltaT);

  // Para usuários do Windows, descomente a linha a seguir
  // system("pause");

  return 0;
}
