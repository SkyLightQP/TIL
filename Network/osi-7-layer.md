# OSI 7 계층

OSI 7 계층(OSI 7 Layer)은 여러 시스템들이 통신할 수 있도록 표준화한 개념입니다.

| Layer | Name               |
| ----- | ------------------ |
| L7    | Application Layer  |
| L6    | Presentation Layer |
| L5    | Session Layer      |
| L4    | Transport Layer    |
| L3    | Network Layer      |
| L2    | Data Link Layer    |
| L1    | Physical Layer     |

사용자가 쓰는 애플리케이션(프로그램)에서 통신 회선으로 전송할 때 Layer 7 → Layer 1의 순서로 이동합니다. 각 Layer들은 데이터를 전송할 때 추가 정보가 담긴 헤더를 함께 전송하는데 이를 캡슐화라고 합니다. 반대로 Layer 1 → Layer 7로 이동할 때는 헤더를 제거하는데 디캡슐화라고 합니다.

- Application Layer (응용 계층)
  - 실제 사용자하고 상호작용하는 계층입니다.
  - HTTP, SMTP, FTP 프로토콜이 이 계층에 해당합니다.
- Presentation Layer (표현 계층)
  - Application Layer가 이해할 수 있도록 데이터를 가공합니다. 데이터 변환, 압축, 암호화 등을 담당합니다.
  - 만약, Layer가 서로 다른 표현 방식을 사용한다면 L6에서 서로 이해할 수 있도록 데이터 형식을 변경합니다.
  - 코덱, ASCII, UTF-8 같은 인코딩 방식, JPG, MPEG 등이 이 계층에 해당합니다.
- Session Layer (세션 계층)
  - 통신이 시작되고 끝나는 과정을 담당합니다.
  - 데이터 통신의 체크포인트도 이 계층에서 관리합니다.
  - 예를 들어 오류가 발생하면 오류가 난 부분만 다시 재전송을 합니다.
  - NFS, SMB 프로토콜이 이 계층에 해당합니다.
- Transport Layer (전송 계층)
  - L5에서 L3로 보내기 전에 이 계층에서 데이터를 세그먼트 단위로 분할합니다.
  - 통신 속도를 결정하거나 데이터 순서, 오류 여부를 판단합니다.
  - TCP, UDP 프로콜이 이 계층에 해당합니다.
- Network Layer (네트워크 계층)
  - 세그먼트 단위에서 패킷 단위로 더 작게 분할합니다.
  - 데이터가 도착할 수 있도록 경로를 결정하는 라우팅 과정을 이 계층에 해당합니다.
  - IP, ICMP, IGMP, ARP 등의 프로토콜이 이 계층에 해당합니다.
- Data Link Layer (데이터 연결 계층)
  - 패킷 단위를 프레임 단위로 더 작게 분할합니다. L3하고 비슷하지만 동일한 네트워크에서만 적용되는 계층입니다.
  - L4과 동일하게 흐름, 오류 제어를 담당하지만 L4는 네트워크 간의 통신만 담당합니다.
  - MAC이 이 계층에 해당합니다.
- Physical Layer (물리 계층)
  - UTP, 스위치 등 실제 물리 장치를 사용해 비트(0, 1) 단위로 전송합니다.

<br/>

TCP/IP 4 계층(TCP/IP 4 Layer)은 OSI 7 계층을 실무에 가깝게 만든 표준 모델입니다. 인터넷에서 쓰이는 프로토콜 모음을 의미합니다.

> TCP/IP처럼 여러 프로토콜을 묶은 것을 Protocol Stack(또는 Protocol Suite)이라고 한다.

| Layer | Name                 |
| ----- | -------------------- |
| L4    | Application Layer    |
| L3    | Transport Layer      |
| L2    | Internet Layer       |
| L1    | Network Access Layer |
