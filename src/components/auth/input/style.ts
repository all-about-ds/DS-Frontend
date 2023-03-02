import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  min-width: 284px;
`;

export const InputTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 8px;
  margin: 0 0 10px 8px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background: #232323;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  padding: 13px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  :focus {
    outline: none;
  }
`;
