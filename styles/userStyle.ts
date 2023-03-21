import { createGlobalStyle } from "styled-components";

const UserStyle = createGlobalStyle` 
@font-face {
  font-family: 'CWDangamAsac-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/CWDangamAsac-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {  
  font-family: "Noto Sans KR";
}

img {
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  }
`;

export default UserStyle;
