#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../src/hello.h"

int main(int argc, char **argv) {
  if (argc > 1) {
    char *str = hello(argv[1]);

    printf("%s", str);
    free(str);

    return EXIT_SUCCESS;
  } else {
    return EXIT_FAILURE;
  }
}
