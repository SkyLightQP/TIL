# 자바 메모리 구조

자바의 메모리 구조는 Method Area, Heap Area, Stack Area, PC Register, Native Method Stack으로 나뉩니다.

스레드 생성 시에는 Method Area와 Heap Area만 공유하며 나머지는 스레드와 함께 각자 생성됩니다.

## Method Area

Method Area에는 static 변수, final 클래스, 클래스 메타데이터(이름 등), 메소드 정보, 상수가 적재됩니다. Runtime Constant Pool을 가지고 있는데 메소드와 필드에 대한 레퍼런스가 저장됩니다. 즉, 메소드와 필드를 참조할 때 Pool에 있는 레퍼런스 정보를 사용해 메모리 주소를 찾아 참조합니다..

## Heap Area

`new` 키워드로 생성한 객체와 배열이 저장됩니다. Young Generation, Old Generation 영역으로 나뉘어 있습니다. 참조되지 않는다면 GC 대상이 됩니다.

## Stack Area

지역변수, 메소드 매개변수(Arguments), 메소드 호출 정보, 임시 변수(식의 중간 평가 값 등)가 저장됩니다. 스레드마다 각자 다른 Stack Area를 가지고 있습니다.

## PC Register, Native Method Stack

PC Register는 현재 실행 중인 명령어의 주소를 저장합니다.

Native Method Stack은 C, C++ 코드와 같은 네이티브 코드를 위한 데이터가 담겨있습니다.

## 자바 컴파일 과정

`.java` 파일을 컴파일하면 바이트코드로 변한되어 JVM으로 넘어가고 `.class` 파일이 생성됩니다.

Class Loader가 `.class` 파일을 읽어 Method Area에 적재합니다. 적재된 바이트 코드는 Loading, Linking, Initialization 과정을 거칩니다.

### Loading

Loading은 Class Loader가 `.class` 파일을 읽어 Method Area에 적재하는 과정입니다.

### Linking

`.class` 파일이 구조적으로 올바른지 확인합니다. `static` 키워드로 선언된 변수를 메모리에 할당하고 기본값으로 초기화합니다. Runtime Constant Pool에 있는 심볼릭 레퍼런스 정보를 실제 레퍼런스로 교체합니다.

### Initialization

기본값으로 초기화된 static 변수를 사용자가 지정한 값으로 바꿉니다. 또한 `static` 블록이 있다면 이를 실행합니다.

이후에는 Execution Engine이 적재된 바이트코드를 인터프리터와 JIT를 사용해서 기계어로 변환합니다. 기본적으로 인터프리터를 사용하지만, 코드가 반복적으로 있을 경우 매번 해석해야되는 문제가 발생합니다. 이 때문에 JIT를 사용해서 자주 사용되는 코드는 미리 해석해 캐싱합니다.
