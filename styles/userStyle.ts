import { createGlobalStyle } from "styled-components";

const UserStyle = createGlobalStyle` 
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'CWDangamAsac-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/CWDangamAsac-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: 'Pretendard-Regular';
}
`;

export default UserStyle;
