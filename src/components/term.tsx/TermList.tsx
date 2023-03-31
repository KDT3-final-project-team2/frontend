import styled from 'styled-components';
import { IconContainer, NoticeContainer } from '../companyjobposting/JobPostingList';
import { NoticeTitle } from './../companyjobposting/JobPostingList';

const TermList = () => {
  return (
    <>
      <NoticeContainer>
        <NoticeTitle>서비스 이용약관</NoticeTitle>
        <IconContainer>
          <CreateDate>2023.04.10</CreateDate>
          <Icon src='/icons.edit.png' />
          <Icon src='/icons.trashcan.png' />
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
