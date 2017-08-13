# Ignition

This is an Interpreter.

[Wiki](https://github.com/v8/v8/wiki/Interpreter)

Register-based, the Backend of Turbofan.

## Goals

Why interpret?

### Reduce memory usage

- Compile to bytecode which is 4x smaller (than machine code)
- Reduce overall code memory by 2x

### Reduce startup time

- Faster compiling to bytecode
- Reduce re-parsing for lazy compile and optimize re-compile

### Reduce complexity

- Bytecode as source of truth
- Simplify compilation pipeline
