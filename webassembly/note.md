## Prepare


### cmake

[cmake/download](https://cmake.org/download/)

```
sudo /Applications/CMake.app/Contents/bin/cmake-gui --install=/usr/local/bin
```

### llvm

```shell
git clone http://llvm.org/git/llvm.git
cd llvm/tools
git clone http://llvm.org/git/clang.git
cd ../projects
git clone http://llvm.org/git/compiler-rt

mkdir llvm_build
cd llvm_build
cmake -G "Unix Makefiles" -DCMAKE_INSTALL_PREFIX=/usr/local -DLLVM_EXPERIMENTAL_TARGETS_TO_BUILD=WebAssembly $HOME/workspace/llvm
make -j 8
sudo make install
```

### binaryen

```
git clone https://github.com/WebAssembly/binaryen.git && cd binaryen
cmake . && make
sudo make install
```

## build

```shell
clang -O3 -c -emit-llvm --target=wasm32 test.c
llc -o test.s test.bc

s2wasm -o test.wast test.s
wasm-as -o test.wasm test.wast
```
