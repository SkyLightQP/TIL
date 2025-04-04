# STUN Server, TURN Server

WebRTC는 P2P(Peer to Peer) 연결을 통해 음성, 영상 등의 데이터를 교환하는 기술입니다. P2P 연결을 위해 클라이언트의 주소를 알아내야하는데 이 때 방화벽, NAT 등의 문제로 알아내지 못하는 경우가 생깁니다.

대부분의 가정용 컴퓨터는 공인 IP가 아닌 공유기에 물린 사설 IP를 많이 사용합니다. 이 때에는 공인 IP 뿐만 아니라 사설 IP까지 알아내야 하는데 공유기(라우터)를 넘어 사설 IP를 알아내는 과정을 **NAT traversal** 이라고 합니다.

## STUN Server

<center>

![MDN WebRTC Protocol - STUN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols/webrtc-stun.png)

</center>

STUN(Session Traversal Utilities for NAT)은(는) 공인 IP를 찾을 때 사용하는 프로토콜입니다. WebRTC 연결 전 STUN 서버로 요청을 보내주면 서버는 대상 클라이언트의 공인IP와 포트를 찾아서 알려줍니다.

## TURN Server

<center>

![MDN WebRTC Protocol - TURN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols/webrtc-turn.png)

</center>

TURN(Traversal Using Relays around NAT)은(는) STUN으로 공인 IP를 알아낼 수 없을 때 사용합니다. TURN 서버는 네트워크에서 데이터를 중계하는 역할을 한다. TURN 서버를 사용하게 되면 P2P 통신은 아니며 STUN 서버에 비해 많은 자원을 소모합니다. 이 때문에 STUN 서버를 사용할 수 없을 때 TURN 서버를 사용합니다.

<br/>

<sub>Image Reference: [https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols)</sub>
