# ARP Spoofing

네트워크 안에서 통신을 하기 위해 게이트웨이(Gateway)를 거치게 되는데 게이트웨이를 속여 중간에서 정보를 가로채는 방법입니다. 즉, 중간자 공격(MITM; Man In the Middle) 방법 중 하나입니다.

OSI L7 중 IP는 L3을 사용하고, MAC은 L2을 사용하기 때문에 IP 주소를 MAC 주소로 바꿔야하는데 이 때 사용되는 프로토콜이 **ARP(Address Resolution Protocol)** 입니다.

A 컴퓨터가 B 컴퓨터에게 정보를 보낼 때, **공격자는 중간에서 B의 MAC 주소라고 속입니다.** 이후 **A의 데이터를 가로채고 B에게 다시 데이터를 보내는 방식**입니다. (**반대로 B 컴퓨터에게도 A의 MAC 주소라고 속입니다.**)

ARP 프로토콜은 ARP 테이블이라는 곳에 IP 주소와 MAC 주소를 저장하여 IP와 MAC을 변환합니다. 원래는 동적으로 유지되나 이를 정적으로 고정시켜 등록하면 ARP Spoofing을 예방할 수 있습니다.
