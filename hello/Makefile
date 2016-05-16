CC     ?= cc
SRC     = src/hello.c
SRC    += $(wildcard deps/*.c)
CFLAGS  = -std=c99 -Wall -Isrc -Ideps

test: test/test.c

test/test.c:
	@$(CC) $(CFLAGS) $@ $(SRC) -o $(basename $@)
	@./$(basename $@)

clean:
	$(RM) test/test

.PHONY: test test/test.c clean
