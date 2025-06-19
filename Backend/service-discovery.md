# Service Discovery

Service Discovery(서비스 디스커버리)는 MSA와 같이 여러 서버가 있는 환경에서 서비스(서버)의 위치를 찾는 방법입니다. 분산 환경에서는 서비스가 새로 생기거나 사라지는 일이 빈번한데, 서비스 간의 연결 정보를 서로 알 수 없기 때문에 연결 정보를 관리하는 역할을 합니다.

Service Registry는 서비스의 위치 정보(IP, 포트 등)을 저장하고 관리하는 데이터베이스 역할을 합니다 Health Check를 통해 서비스 상태를 확인하고 정상이면 Service Registry에 등록, 비정상이면 삭제하는 방식으로 작동합니다.

서비스가 주기적으로 자신의 상태를 Service Registry에 보고하거나 반대로 Service Registry가 주기적으로 서비스 상태를 확인하여 업데이트합니다. TTL(Time-to-Live) 설정을 사용해 일정 시간 내에 상태 갱신이 없으면 자동으로 서비스 정보를 삭제하기도 합니다.

서비스 정보를 어떻게 얻는지에 따라 두가지로 나눕니다.

## Client-Side Discovery

서비스 연결 정보 조회와 로드밸런싱을 클라이언트에서 담당합니다.

- 클라이언트가 Service Registry에 연결 정보를 요청하여 서비스 주소 획득
- 로드밸런싱을 통해 서비스 호출

클라이언트가 직접 로드밸런싱 전략을 제어할 수 있지만 클라이언트 복잡도가 증가하는 문제가 있습니다.

## Server-side Discovery

클라이언트가 직접적으로 Service Registry에 접근하지 않습니다. 로드밸런서 또는 API Gateway가 대신 Service Registry으로부터 연결 정보를 얻어 서비스로 라우팅합니다.

- 클라이언트가 로드밸런스(API Gateway)를 호출하면
- 로드밸런스가 Service Registry에 연결 정보를 요청하여 서비스 주소 획득

클라이언트를 단순화시킬 수 있지만 로드밸런서나 API Gateway에 의존되기 때문에 단일 장애점(Single Point of Failure)이 생길 수 있습니다.

---

구현체로는 Netflix Eureka, Consul 그리고 Service Registry 구현체로는 Zookeeper, Etcd 등이 있습니다.
