import styled from 'styled-components';

const Header = () => {
  return <HeaderComponent>Header</HeaderComponent>;
};

export default Header;

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100vw;
  background-color: blue;
`;
