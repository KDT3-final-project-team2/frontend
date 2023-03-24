import React, { ReactNode } from 'react';
import styled from 'styled-components';

const RightBar = ({ children }: { children: ReactNode }) => {
  return <RightBarComponent>{children}</RightBarComponent>;
};

export default RightBar;

const RightBarComponent = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 450px;
  height: 100vh;
  background-color: var(--color-primary-010);
  border-top-left-radius: 50px;
  padding: 40px;
  box-sizing: border-box;
  @media (max-width: 1500px) {
    display: none;
  }
`;
