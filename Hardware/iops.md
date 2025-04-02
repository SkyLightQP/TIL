# IOPS

**IOPS**는 Input/Output Operations Per Seconds의 줄임말로 저장장치의 속도 단위 중 하나입니다. 간단하게 정리하면 초당 처리되는 I/O 수치입니다. MiB/s, GiB/s 등과 같이 Random Access, Sequential Access에 따라 다르게 표현할 수 있습니다.

IOPS 또는 초당 전송량은 아래 공식으로 계산합니다.

- $(초당 전송량) = (IOPS) \times (블럭 크기)$
- $(IOPS) = \frac{(초당 전송량)}{(블럭 크기)}$

AWS EBS에서는 저장 장치 속도를 IOPS로 나타내고 있는데 `gp2` 유형의 최대 IOPS는 16000 IOPS 입니다.
또한 `gp2` 유형의 블럭 크기는 16KiB 입니다.

위 공식과 정보를 사용해서 초당 전송량으로 바꿔보면 $16000 IOPS \times 16 KiB = 256000 KiB/s$ 입니다. 이를 보기 편한 단위까지 변경하면 $250MiB/s$ 가 됩니다.
