#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include "../src/hello.h"

int main(void) {

  char *foo = hello("foo");
  char *expected = "Hello: foo\n";

  if (strncmp(foo, expected, strlen(expected))) {
    puts("\n");
    printf("  expected: '%s'\n", foo);
    printf("    actual: '%s'\n", expected);
    puts("\n");
    free(foo);
    return EXIT_FAILURE;
  } else {
    puts("Success.");
    free(foo);
    return EXIT_SUCCESS;
  }
}
