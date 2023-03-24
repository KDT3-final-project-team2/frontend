import React from 'react';
import styled from 'styled-components';

const LeftBar = () => {
  return <LeftBarComponent>LeftBar</LeftBarComponent>;
};

export default LeftBar;

const LeftBarComponent = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 330px;
  height: 100vh;
  background-color: var(--color-primary-100);
  box-sizing: border-box;
  z-index: -1;
  @media (max-width: 1000px) {
    display: none;
  }
`;
