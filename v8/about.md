# v8

This is a JavaScript Engine(Virtual Machine).
written in C++,
used in Chrome.
V8 can runs standalone, or can be embedded into C++ app.

<https://github.com/v8/v8/wiki>

V8 Lauched with Chrome in 2008.


<https://docs.google.com/presentation/d/1HgDDXBYqCJNasBKBDf9szap1j4q4wnSHhOYpaNy5mHU/>

## Full-codegen (2008)

AST-walking JIT compiler with inline-caching.


### Compiler pipeline

Source code
  -> Parser -> Full-codegen -> Unoptimized code


## Crankshaft (2010)

Optimizing JIT compiler with Type fallback and deoptimization.

### Compiler pipeline

Source code
  -> Parser -> Full-codegen -> Unoptimized code
  -> Parser -> Crankcshaft -> optimized code

## Turbofan (2015)

Optimizing JIT compiler with Type and Range analysis, see of nodes.

### Compiler pipeline

Source code
  -> Parser -> Full-codegen -> Unoptimized code
  -> Parser
    -> Crankcshaft -> optimized code
    -> Turbofan -> optimized code

## Turbofan + Ignition (2016)

Source code -> Parser
  -> Full-codegen -> Unoptimized code
                  -> Crankcshaft -> optimized code
  -> Ignition -> Bytecode -> Turbofan -> optimized code

## Turbofan + Ignition (2017?)

Source code -> Parser
  -> Ignition -> Bytecode -> Turbofan -> optimized code