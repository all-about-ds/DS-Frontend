import styled from 'styled-components';

export const DescWrapper = styled.div`
  width: 16.5vw;
  min-width: 284px;
  display: flex;
  background: #1c1c1c;
  border-radius: 10px;
  margin-top: 28px;
`;

export const IconBox = styled.div`
  width: 3vw;
  height: 5vh;
  min-width: 56px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2c2c;
  border-radius: 10px;
  margin: 12px;
  font-size: 40px;
`;

export const DescText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #acacac;
  margin-top: 12px;
  margin-right: 12px;
`;

export const InputWrapper = styled.div`
  width: 16.5vw;
  min-width: 284px;
  display: flex;
  flex-direction: column;
  margin-top: 2.08vh;
`;

export const InputText = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
`;

export const InputBox = styled.input`
  width: 15.5vw;
  min-width: 266px;
  height: 40px;
  background: #232323;
  border-radius: 10px;
  border: none;
  padding-left: 16px;
`;

export const Button = styled.div`
  width: 16.5vw;
  min-width: 284px;
  height: 40px;
  background: #7848de;
  border-radius: 10px;
  margin-top: 10.32vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;

  &:hover {
    border: 1px solid #7848de;
    border-radius: 10px;
    color: #7848de;
    background: none;
    box-sizing: border-box;
  }
`;

export const BottomTextBox = styled.div`
  margin-top: 19px;
  height: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const FirstText = styled.div`
  color: #c2c2c2;

  margin-right: 4px;
`;

export const ClickText = styled.div`
  color: #7139ea;
  font-size: 12px;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 22px;
  height: 1px;

  background: #a2a2a2;
  border-radius: 11px;
  margin-top: 1.21vh;
  margin-bottom: 11px;
`;
