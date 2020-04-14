# Default Trait

Default Trait를 구현해서 Struct의 기본값을 정할 수 있다.

```rust
struct Test {
    a: u32,
    b: bool,
}

impl Default for Test {
    fn default() -> Self {
        Self {
            a: 10,
            b: false
        }
    }
}
```

이후 아래처럼 쓸 수 있는데 타입 추론이 되면 `Default::default()`로 아니라면 `Foo::default()`형태로 쓸 수 있다.

```rust
struct Test {
    a: u32,
    b: bool,
}

impl Test {
    fn print(&self) {
        println!("a: {}, b: {}", self.a, self.b);
    }
}

impl Default for Test {
    fn default() -> Self {
        Self {
            a: 10,
            b: false
        }
    }
}

fn main() {
    let test: Test = Default::default();
    // let test: Test = Test::default();
    test.print();
}
```

실행 결과: `a: 10,1 b: false`