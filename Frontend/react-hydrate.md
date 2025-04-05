# React Hydrate

React는 일반적으로 Client Side Rendering(CSR)을 제공하는 라이브러리입니다. JavaScript 파일을 가져와 클라이언트에서 DOM을 렌더링하여 사용자에게 보여줍니다.

처음 렌더링 되는 과정때문에 사용자는 DOM이 렌더링 될 동안 기다려야하는 문제가 생깁니다. 그럼 이 과정을 Server Side에서 처리하면 해결되지 않을까요? Server Side에서 정적 페이지를 만들고 DOM 렌더링을 시도하면, 브라우저 환경이기 때문에 이벤트와 같은 Document와 상호작용이 불가능 한 문제가 생깁니다.

이를 해결하기 위해 Server Side에서 렌더링된 결과물을 받아 클라이언트에서 이벤트를 연결시켜주면 됩니다. 이를 **Hydration**이라고 합니다.

서버에서 보내준 렌더링 된 HTML 결과와 클라이언트에서 생성된 결과물이 다르면 Hydrate 과정을 실패하게 됩니다. 주로 Random 값을 사용하거나 Date 값 등을 사용할 때 발생합니다.

ReactDOM에서 `hydrate()` 함수로 제공합니다.
