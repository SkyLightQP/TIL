# Value Object

Value Object(VO)는 도메인 설계 시 특정 값을 나타내기 위한 객체입니다. 캡슐화가 가능한 장점을 가지고 있습니다.

현실 세계에 있는 사물을 최소 단위 객체로 표현하려고 하면 어떻게 해야할까요? $(x, y)$ 순서쌍을 가진 좌표나 통화 단위를 가지고 있는 화폐를 나타낼 때 Value Object를 사용할 수 있습니다.

```kotlin
data class Point(
    val x: Int,
    val y: Int
)
```

```kotlin
data class Money(
    val currency: CurrencyType,
    val value: Int
)
enum class CurrencyType {
    KRW, USD, EUR
}
```

Value Object는 불변성(Immutable)을 가지고 설계해야 합니다.

```kotlin
class Weight(var value: Int) {
    /* ... */
}

val kg50 = Weight(50);
kim.weight = kg50;
park.weight = kg50;
```

다음과 같은 코드가 있을 때 `kim.weight.value = 75` 코드로 `kg50`으로 넘겨받은 몸무게 값을 `75`로 바꿨다고 가정해보겠습니다.
`kg50` 객체는 `kim`과 `park` 모두에서 참조받고 있습니다. 코드의 의도는 kim의 몸무게 75로 바꾸기를 원하고 있지만 실제 결과는 두 객체의 몸무게가 모두 75로 바뀌게 됩니다.

이런 문제를 방지하기 위해 Value Object는 불변성을 가지고 설계해야 합니다.

Value Object와 함께 비교되는 Entity는 고유 ID를 가지고 있는 객체입니다. 객체가 변경되어도 고유 ID를 사용해 동일한 Entity인지 판단할 수 있습니다.

Entity를 설계할 때 원시값을 Value Object으로 감싸면 Entity가 거대해지는 문제를 방지할 수 있습니다.
