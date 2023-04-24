import styled from '@emotion/styled';

export const NormalModal = styled.section`
  box-sizing: border-box;
  width: 340px;
  height: 155px;
  border-radius: 10px;
  background: #1e1e1e;
  padding: 17px 16px 24px;
`;

export const Title = styled.h1`
=  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
`;

export const Description = styled.article`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1.2rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1.5rem;
`;

export const CancleButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background: #383838;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #808080;
  cursor: pointer;
`;

export const ExecuteButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background: #7848de;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
  cursor: pointer;
`;
