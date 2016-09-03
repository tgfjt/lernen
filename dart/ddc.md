# Dart Dev Compiler

https://github.com/dart-lang/dev_compiler/blob/master/USAGE.md

```shel
git clone https://github.com/dart-lang/dev_compiler.git
```

```shell
cd dev_compiler
pub get
./tool/build_sdk.sh
```

hello.dart

```dart
class Sample {
  static hello() {
    print("Hello, Dart!");
  }
}

main() {
  Sample.hello();
}
```

```shell
dart $DDC_PATH/bin/dartdevc.dart --modules node -o hello.js hello.dart
```

```shell
node -e 'require("./hello").hello.main()'
```

`Hello, Dart!`

<https://gist.github.com/tgfjt/9feed2d8291bd5a1cf9647e1dac443bf>