# tvheadend m3u 파일 등록

tvheadend는 iptv 등의 데이터를 재송출해주는 소프트웨어입니다.

(제 테스트 환경 기준) linux + docker 조합에서 m3u 파일을 불러오지 못하는 문제가 있는데 아래처럼 해결 가능합니다.

- EOL 형식을 unix로 수정
- Notepad++ 사용 시 `편집 -> EOL 변환` 에서 변경 가능

변경 후 다시 적용시주면 정상적으로 불러와집니다.