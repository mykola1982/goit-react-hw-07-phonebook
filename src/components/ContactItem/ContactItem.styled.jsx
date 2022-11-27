import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid orange;
  font-size: 20px;
  line-height: 1.16;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  padding: 8px;
  background-color: orange;
  border-radius: 4px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;
  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    color: orange;
  }
`;
