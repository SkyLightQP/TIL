# Jest `toBe()`, `toEqual()`

Jest에서는 `toBe()` 그리고 `toEqual()` 두 가지 함수가 있는데, 값을 비교한다라는 용도는 둘 다 같지만 작동 방식이 다릅니다.

### toBe()

해당 함수는 값이 같은지, 그리고 **객체도 같은지(same)도** 비교합니다.

```js
const a = { name: "ABC" };
const b = { name: "ABC" };

expect(a).toBe(b); // Failure
expect(a).toBe(a); // Success
```

### toEqual()

해당 함수는 **값이 같은지(equal)만** 비교합니다.

```js
const a = { name: "ABC" };
const b = { name: "ABC" };

expect(a).toEqual(b); // Success
expect(a).toEqual(a); // Success
```

---

추가적으로 **`toStrictEqual()`** 이라는 함수도 있습니다.

함수 이름 그대로 엄격하게 값을 비교한다는 뜻입니다. 일반적으로 `undefined`는 아무것도 존재하지 않음을 뜻하지만 해당 함수를 사용해 비교하면 `undefined`가 있을 때 이를 무시하지 않고 실패로 처리합니다.

```js
const a = { name: "ABC" };
const b = { name: "ABC", address: undefined };

expect(a).toEqual(b); // Success
expect(a).toStrictEqual(b); // Failure
```
