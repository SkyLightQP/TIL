# Reflow, Repaint

## Reflow (Layout)

DOM Tree와 Style 정보를 합쳐 Render Tree를 구성합니다. 이 때 CSS의 `display: none;` 속성과 같이 화면에서 숨겨지는 게 있다면
DOM Tree에 있는 Element가 Render Tree에는 없기도 합니다.

Element들의 크기, 길이, 폰트, 텍스트 내용, 인라인 스타일 등이 변경되면 관련된 Element 수치를 다시 계산하여 Render Tree를 구성합니다.

```html
<style>
  #box {
    width: 100px;
    height: 100px;

    background-color: red;
  }
</style>
<div id="box" />
<script>
  document.querySelector("#box").addEventListener("click", (e) => {
    e.target.style.width = "50px";
  });
</script>
```

위 코드와 같이 `#box` Element의 너비가 변경되면 브라우저는 Reflow를 수행합니다.

## Repaint (Paint)

Render Tree를 브라우저에서 볼 수 있도록 그리는 과정입니다. `background, color, opacity, border` 등과 같은 스타일이 변경될 때 발생합니다.
크기나 길이가 변경되지 않고 단순 스타일만 변경된다면 Reflow 없이 Repaint만 발생합니다.

```html
<style>
  #box {
    width: 100px;
    height: 100px;

    background-color: red;
  }
</style>
<div id="box" />
<script>
  document.querySelector("#box").addEventListener("click", (e) => {
    e.target.style.backgroundColor = "blue";
  });
</script>
```

## Reflow와 Repaint 비용 절약하기

- Dom Tree의 깊이가 얕을 수록 Reflow의 비용이 감소합니다.
- JavaScript에서 스타일을 변화시킬 때는 한번에 처리합니다.

```jsx
// Reflow 두 번 발생
document.querySelector("#box").addEventListener("click", (e) => {
  e.target.style.width = "50px"; // Reflow (1)
  e.target.style.height = "50px"; // Reflow (2)
});

// Reflow 한 번 발생
document.querySelector("#box").addEventListener("click", (e) => {
  e.target.style.cssStyle = "width: 50px; height: 50px;"; // Reflow (1)
});
```

- CSS 애니메이션을 사용할 때 `position: absolute` 또는 `position: fixed` 스타일을 적용하면 Reflow 발생 시 해당 Element에서만 발생합니다.
- 인라인(Inline) 스타일 사용을 자제합니다. 인라인 스타일 변경 시 Reflow가 발생합니다.
