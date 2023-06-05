import styled from 'styled-components';

const DropDown = ({ isOpen, onClickToggle, EditModalOpen, onClickDisCard }: any) => {
  return (
    <DropDownContainer>
      <Vertical src='/icons/more_vertical.png' onClick={onClickToggle} />
      {isOpen && (
        <DropDownBox>
          <Edit onClick={EditModalOpen}>
            <p>수정</p>
          </Edit>
          <Delete onClick={onClickDisCard}>
            <p>폐기</p>
          </Delete>
        </DropDownBox>
      )}
    </DropDownContainer>
  );
};

export default DropDown;

const Vertical = styled.img`
  cursor: pointer;
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const DropDownBox = styled.div`
  margin-top: 10px;
  position: absolute;
  width: 140px;
  height: 99px;
  left: -120px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  border-radius: 10px;
  padding: 16px 0;
  z-index: 1;
`;

const Edit = styled.div`
  width: 140px;
  height: 34px;
  &:hover {
    background: #b3c2e7;
    color: #fff;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  padding: 9px 20px 8px 20px;
`;

const Delete = styled(Edit)``;
