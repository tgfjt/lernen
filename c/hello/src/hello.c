#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "hello.h"

char *hello(char *str) {
  int length = strlen("Hello: \n") + strlen(str) + 1;
  char *message = (char *) malloc(length);

  if (message == NULL) {
    return NULL;
  }

  sprintf(message, "Hello: %s\n", str);

  return message;
}
