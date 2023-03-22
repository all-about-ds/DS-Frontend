import styled from '@emotion/styled';

export const MemberTimerItem = styled.div<{ isActive: boolean }>`
  width: 132px;
  height: 35px;
  border-radius: 10px;
  border: ${(e) =>
    e.isActive ? '1px solid #7848de' : '1px solid rgba(120, 72, 222, 0.28);'};
  display: flex;
  padding: 19px 17px;
  align-items: center;
  gap: 10px;

  margin: 0 auto;

  svg {
    width: 33px;
    height: 33px;
  }

  svg > * > * {
    fill: ${(e) => e.isActive && '#7848de'};
  }

  div > p {
    color: ${(e) => e.isActive && 'white'};
  }

  @media screen and (max-width: 800px) {
    width: 290px;
  }
`;

export const MemberName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
`;

export const MemberTimer = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #818181;
`;
