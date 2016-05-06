#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include "../src/hello.h"

int
main(void) {

  char *foo = hello("foo");
  char expected[12] = "Hello: foo\n";

  if (strcmp(foo, expected)) {
    printf("\n");
    printf("  expected: '%s'\n", foo);
    printf("    actual: '%s'\n", expected);
    printf("\n");
    free(foo);
    exit(EXIT_FAILURE);
  } else {
    printf("\n");
    printf("Success.\n");
    free(foo);
    exit(EXIT_SUCCESS);
  }
}
