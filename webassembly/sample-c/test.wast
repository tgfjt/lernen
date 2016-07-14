(module
  (memory 1)
  (export "memory" memory)
  (export "square" $square)
  (func $square (param $0 i32) (result i32)
    (i32.mul
      (get_local $0)
      (get_local $0)
    )
  )
)
