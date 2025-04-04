# 모듈러 연산과 RSA 암호화

$A \div B = Q$ 그리고 나머지 $R$이 있을 때 R을 구하는 연산 $A \bmod B = R$을 모듈러 연산(나머지 연산)이라고 합니다. 프로그래밍 언어에서는 주로 `A % B`와 같이 퍼센트(`%`) 연산자를 사용합니다.

예를 들어 $16 \bmod 7 = 2$, $16 \bmod 2 = 0$입니다.

$16 \bmod 3 = 1$ 이고 $13 \bmod 3 = 1$ 으로 연산 결과가 같을 때 $16 \equiv 13 \pmod{3}$ 으로 표현할 수 있습니다. $A \equiv B \pmod{C}$가 있다면 이를 C에 대한 합동 관계라고 합니다.

암호화 방법 중 하나인 RSA 암호화(복호화) 과정에서 모듈러 연산이 사용됩니다.

> 들어가기 전, $\Phi(n)$은 오일러 함수로 n과 서로수인 정수 집합 원소의 개수를 의미합니다.

1. 먼저, 임의의 큰 소수 p, q를 선택합니다.

2. $n = p \times q$를 구합니다. 이 때 $p$와 $q$를 알고 있으면 n을 구하기 쉽지만 $n$만으로 두 수를 찾는건 어렵습니다.

3. $\Phi(n) = (p - 1)(q - 1)$을 구합니다.

4. $gcd(e, \Phi(n)) = 1$을 만족하는 $e$를 선택합니다. 여기서 $e$가 공개키가 됩니다.

5. $d \times e = 1 \bmod \Phi(n)$을 만족하는 $d$를 찾습니다. 이 때 d가 비밀키가 됩니다.

$d, p, q, \Phi(n)$을 알게되면 공개키 값을 찾을 수 있기 때문에 4개의 값들은 외부로 노출되면 안됩니다.

평문 $M$이 있을 때 $M^e \bmod n (0 < M < n)$으로 암호문 $C$를 구할 수 있고

반대로 $M = C^d \bmod n$으로 복호화할 수 있습니다.
