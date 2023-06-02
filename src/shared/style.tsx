import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        @font-face {
          font-family: 'AppleSDGothicNeoB00';
          font-style: normal;
          src: url('/font/AppleSDGothicNeoB.woff') format('woff');
        }

        @font-face {
          font-family: 'AppleSDGothicNeoM00';
          font-style: normal;
          src: url('../font/AppleSDGothicNeoM.woff') format('woff');
        }

        @font-face {
          font-family: 'AppleSDGothicNeoEB00';
          font-style: normal;
          src: url('../font/AppleSDGothicNeoEB.woff') format('woff');
        }
        @font-face {
          font-family: 'AppleSDGothicNeoSB00';
          font-style: normal;
          src: url('../font/AppleSDGothicNeoSB.woff') format('woff');
        }
        body {
          font-family: 'AppleSDGothicNeoM00', sans-serif;
          background-color: #101010;
        }
        a {
          text-decoration: none;
          color: #ffffff;
        }
        button {
          font-family: 'AppleSDGothiCNeoM00', sans-serif;
        }
        input {
          font-family: 'AppleSDGothiCNeoM00', sans-serif;

          :focus {
            outline: none;
          }
        }
      `}
    />
  );
}

export default GlobalStyle;

//@font-face {
//font-family: 'JaldiBold';
//font-style: normal;
//src: url('/font/Jaldi-Bold.woff') format('woff');
//}
