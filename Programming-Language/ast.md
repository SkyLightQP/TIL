# AST (Abstract Syntax Tree)

AST는 실제 코드에서 기호(괄호, 세미콜론 등)와 같이 필요없는 정보를 제외하고 만든 트리입니다.

C언어로 예를 들면

```c
int a = 10;
```

위 코드는 자료형 int인 **Keyword**, 변수 이름인 **Identifier**, 변수의 값인 **Literal**으로 이루어져 있습니다.

만약, a + b \* c + d 라는 식이 있다면

1. a + b 그리고 c + d를 계산 후 곱 연산
2. b \* c 이후 더하기 연산

등 우선순위에 따라 여러 연산 방법이 생기는데 AST로 변환하면 어떤 순서로 연산 해야되는지 알 수 없습니다. 이 때문에 연산자에는 연산자 우선순위가 지정되어 있습니다.

```javascript
function foo() {
  console.log("bar");
}
```

위와 같은 JavaScript 코드를 아래처럼 AST로 바꿀 수 있습니다.

```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 41,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 19,
            "end": 38,
            "expression": {
              "type": "CallExpression",
              "start": 19,
              "end": 37,
              "callee": {
                "type": "MemberExpression",
                "start": 19,
                "end": 30,
                "object": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 26,
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 30,
                  "name": "log"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 31,
                  "end": 36,
                  "value": "bar",
                  "raw": "\"bar\""
                }
              ],
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```

AST는 주로 컴파일러에서 사용되는데 컴파일은 아래 과정을 거칩니다.

1. Lexical Analysis (낱말 또는 어휘 분석)
   1. 입력된 코드들을 의미가 있는 단위로 묶는다. 이후 Token을 만듭니다.
2. Syntax Analysis (구문 분석)
   1. 위에서 만들어진 Token으로 Syntax Tree를 만듭니다.
   2. 이 때 문법적 오류를 확인합니다.
3. Semantic Analysis (의미 문석)
   1. Semantic(의미)에 따라 필요한 정보만 트리로 만드는데 이 트리가 AST입니다.
   2. 변수 자료형이 불일치 하는 등의 오류를 확인합니다.
4. Intermediate Representation (중간 표현)
   1. 소스 코드를 표현하기 위해 내부적으로 사용하는 코드입니다.
   2. 최적화 처리에 사용됩니다.
   3. C언어의 경우 이 과정에서 GIMPLE Tree를 만듭니다.
5. 이후 어셈블리어 등으로 명령어를 바꾸고 최적화합니다.
6. 최종적으로 기계어로 바꿉니다.

1번부터 4번까지의 과정을 컴파일러 프론트엔드, 이후 과정을 컴파일러 백엔드라고 합니다.
