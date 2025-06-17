# Integer Cache

```java
Integer a = 127; // Integer.valueOf(127)
Integer b = 127;

Integer c = 128; // Integer.valueOf(128)
Integer d = 128;

System.out.println(a == b);
System.out.println(c == d);
```

자바에서 위 코드를 실행하면 아래와 같은 결과가 나옵니다.

```
true
false
```

Integer는 Int의 Wrapper 객체입니다. `127`이라는 Number Literal은 Auto Boxing되어 `Integer.valueOf(127)`으로 바뀌고 새로운 객체를 만듭니다.
즉, `a` `b` `c` `d` 변수는 서로 다른 객체를 참조하고 있습니다.

자바에서는 Integer Cache라는 기능으로 -128~127 범위의 수를 미리 메모리에 할당시켜 캐싱해두고 있습니다. 따라서 `127` 값을 비교한 `a`와 `b`는 미리 캐싱된 객체를 사용하기 때문에 `true`가 출력됩니다. 캐싱되지 않은 `128` 값을 비교하면 다른 객체를 비교하고 있기 때문에 `false`가 출력됩니다.

JVM 옵션(`java.lang.Integer.IntegerCache.high`)을 사용해 Integer Cache의 범위를 변경할 수 있습니다.

정확한 값을 비교하기 위해서는 `equals()` 메소드를 사용해야 하며 이 경우 두 출력문 모두 `true`가 출력됩니다.

추가로 `new Integer()` 사용 시 캐싱 여부와 상관없이 항상 새로운 객체를 생성합니다. 다만, Java 9부터 deprecated 된 메소드입니다.
