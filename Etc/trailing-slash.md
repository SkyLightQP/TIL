# Trailing Slash

Trailing Slash는 URL 끝에 붙은 슬래시(`/`)를 말합니다.

예를 들어 `https://github.com/`은 Trailing Slash가 있고 `https://github.com`은 Trailing Slash가 없습니다.

Trailing Slash가 있는 URL은 디렉토리를 의미합니다. `http://acme.com/foobar/`는 `foobar`라는 디렉토리를 가리키게 됩니다. 반대로 Trailing Slash가 없는 URL은 파일을 의미합니다. `http://acme.com/foobar`에서 `foobar`는 파일입니다.

만약 Trailing Slash가 없다면 서버에서는 해당 이름을 가진 파일을 찾고, 파일이 없다면 디렉토리를 찾습니다. 그리고 디렉토리에 있는 `index.html`을 찾습니다. 마찬가지로 Trailing Slash가 있다면 해당 이름을 가진 디렉토리를 찾고 그 안에서 `index.html`를 찾습니다.

일반적으로 Trailing Slash를 신경쓰지 않는데 Trailing Slash가 없는 경우 브라우저 내부에서 슬래시를 추가해서 작업합니다.
