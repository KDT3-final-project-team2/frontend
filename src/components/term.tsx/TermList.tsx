import styled from 'styled-components';
import { IconContainer, NoticeContainer } from '../companyjobposting/JobPostingList';
import { NoticeTitle } from './../companyjobposting/JobPostingList';
import edit from '../../assets/icons/edit.png';
import trashcan from '../../assets/icons/trashcan.png';

const TermList = () => {
  return (
    <>
      <NoticeContainer>
        <NoticeTitle>서비스 이용약관</NoticeTitle>
        <IconContainer>
          <CreateDate>2023.04.10</CreateDate>
          <Icon src={edit} />
          <Icon src={trashcan} />
        </IconContainer>
      </NoticeContainer>
    </>
  );
};

export default TermList;

const CreateDate = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #4b5563;
  padding-top: 5px;
`;

const Icon = styled.img`
  cursor: pointer;
`;
