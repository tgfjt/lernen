Let me see

## clib

install [clib](https://github.com/clibs/clib)
`brew install clib`


## valgrind

### leak check
`valgrind --leak-check=full ./program arg`

### heap profile
`valgrind --tool=massif ./program arg`

### callgraph
`valgrind --tool=callgrind`
