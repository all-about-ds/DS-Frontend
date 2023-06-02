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
          src: url('/font/AppleSDGothicNeoB.woff') format('woff'),
            url('/font/AppleSDGothicNeoB.woff2') format('font-woff2');
        }

        @font-face {
          font-family: 'AppleSDGothicNeoM00';
          font-style: normal;
          src: url('../font/AppleSDGothicNeoM.woff') format('woff'),
            url('/font/AppleSDGothicNeoM.woff2') format('font-woff2');
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
        p {
          font-family: 'AppleSDGothicNeoM00', sans-serif;
        }
        a {
          text-decoration: none;
          color: #ffffff;
        }
        button {
          font-family: 'AppleSDGothicNeoM00', sans-serif;
        }
        input {
          font-family: 'AppleSDGothicNeoM00', sans-serif;

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
