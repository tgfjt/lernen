#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "hello.h"

char *hello(char *str) {
  int size = strlen(str) + 10;
  char *message = (char *) malloc(size);

  if (message == NULL) {
    exit(EXIT_FAILURE);
  }

  sprintf(message, "Hello: %s\n", str);

  return message;
}
