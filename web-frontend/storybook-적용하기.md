# Storybook 적용하기

예전부터 Storybook을 적용해보고 싶다고 생각했는데 미루고 미루다 오늘 적용해봤다.

Storybook은 개발자가 만든 Component를 시각적으로 확인하거나 Playground 형태로 가지고 놀 수 (?) 있다. Component 버전의 Docs 느낌이다.

`npx -p @storybook/cli sb init --type react` 명령어를 통해 쉽게 구축할 수 있었다.

구글에 검색하면 한국어로 작성된 강좌도 많아 배우기도 좋았다.

위 명령어를 치면 `stories` 폴더가 생기는데 처음 보고 떠오른 생각은 Component 마다 스토리를 만들어 줘야되는건가? 인가. 정답이였다.

`stories` 폴더에 Component 별로 스토리를 만들기에는 추후 복잡해지므로 Component 폴더에 `*.stories.tsx` 의 파일을 추가하는 식으로 관리하는거 같다.

knobs라는 애드온도 설치했는데 Component의 Prop들을 확인하거나 변경할 수 있다.

이제 Component별로 스토리를 추가하는 일만 남았다.

추가로 현재 프로젝트에서는 컬러 스키마를 CSS 변수로 관리하고 있는데 Storybook에서 변수를 사용한 Component는 작동이 안되는걸 확인하였다.

이 때는 `.storybook` 폴더에 `preview-head.html` 를 추가하고 CSS 변수가 담겨있는 `<style>` 태그를 추가해주었더니 정상 작동하였다.