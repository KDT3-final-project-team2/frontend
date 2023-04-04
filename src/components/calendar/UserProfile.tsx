import Avvvatars from 'avvvatars-react';
import styled from 'styled-components';

const UserProfile = () => {
  const onClickToggle = () => {};

  return (
    <ProfileWrapper>
      <img src='/icons/dubbleArrow.png' onClick={onClickToggle} />
      <div className='profile'>
        <div className='nameBox'>
          <p className='name'>메디메치</p>
          <p className='hospital'>병의원</p>
        </div>
        <Avvvatars value='메디메치' style='character' size={50} />
      </div>
    </ProfileWrapper>
  );
};

export default UserProfile;

const ProfileWrapper = styled.div`
  margin-top: 54px;
  padding-left: 55px;
  padding-right: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    .nameBox {
      padding-top: 5px;
      .name {
        margin-bottom: 4px;
        font-weight: 700;
        font-size: 18px;
      }
      .hospital {
        color: #7b7b7b;
        font-weight: 700;
        font-size: 14px;
        text-align: right;
      }
    }
  }
`;
