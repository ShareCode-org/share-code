import styled from 'styled-components';

export const OpenButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  box-shadow: 9px 6px 13px -6px #261bbd;
  background-color: #0000ff;
  border-radius: 42px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  padding: 10px 18px;
  text-decoration: none;
  margin-left: 10px;
  z-index: 1;
  &:hover {
    background-color: #2626ff;
  }
`;