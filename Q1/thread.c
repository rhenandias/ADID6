#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <time.h>
#include <pthread.h>

int acertos;
pthread_mutex_t mutexsum;
struct timeval inicio, final;
double deltaT;

double maior_tempo;

void *async(void *n)
{
  gettimeofday(&inicio, NULL);

  for (long i = 0; i < (long)n; i++)
  {
    float x = (double)rand() / (double)RAND_MAX;
    float y = (double)rand() / (double)RAND_MAX;

    if (x * x + y * y <= 1.0)
    {
      acertos++;
    }
  }

  gettimeofday(&final, NULL);

  deltaT = (final.tv_sec + final.tv_usec / 1000000.0) - (inicio.tv_sec + inicio.tv_usec / 1000000.0);

  if (deltaT > maior_tempo)
    maior_tempo = deltaT;
}

int main()
{
  srand(time(NULL));
  pthread_mutex_init(&mutexsum, NULL);

  int threads_count = 100;
  pthread_t threads[threads_count];

  long total_n = 10000000;
  long target_n = total_n / threads_count;

  for (int i = 0; i < threads_count; i++)
  {
    pthread_create(&(threads[i]), NULL, async, (void *)target_n);
    pthread_join(threads[i], NULL);
  }

  double res = 4.0 * acertos / (double)total_n;

  // deltaT = (final.tv_sec + final.tv_usec / 1000000.0) - (inicio.tv_sec + inicio.tv_usec / 1000000.0);

  printf("Valor final obtido %f\n", res);
  printf("Tempo gasto no procedimento: %f segundos\n", deltaT);

  return 0;
}