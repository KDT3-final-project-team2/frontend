import { ITermListProps } from '@/@types/props';
import { useState } from 'react';
import styled from 'styled-components';
import { IconContainer, NoticeContainer } from '../companyjobposting/JobPostingList';
import { NoticeTitle } from './../companyjobposting/JobPostingList';
import { termExample } from './../../constants/termExample';

const TermList = ({ onClickTermEdit, index }: ITermListProps) => {
  const [open, setOpen] = useState(index === 0 ? true : false);

  const onClickListOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <TermListContainer open={open} onClick={onClickListOpen}>
        <div className='termBox'>
          <TermType>서비스 이용약관</TermType>
          <IconContainer>
            <CreateDate>2023.04.10</CreateDate>
            <Icon src='/icons/edit.png' onClick={onClickTermEdit} />
            <Icon src='/icons/trashcan.png' />
          </IconContainer>
        </div>
        {open && (
          <>
            <Border></Border>
            <TermContentsBox>
              <Date>2023. 04. 10 오전 10:00</Date>
              <div className='contentsborder'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: termExample,
                  }}
                ></p>
              </div>
            </TermContentsBox>
          </>
        )}
      </TermListContainer>
    </>
  );
};

export default TermList;

const TermType = styled(NoticeTitle)`
  padding-top: 6px;
`;

const CreateDate = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #4b5563;
  padding-top: 5px;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const TermListContainer = styled.div`
  width: 93%;
  height: ${({ open }: { open?: boolean }) => {
    return open ? '420px' : '70px';
  }};
  box-shadow: 2px 2px 10px 2px #4357ac26;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  padding: 0 40px;
  margin-bottom: 20px;
  cursor: pointer;
  .termBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
`;

const Border = styled.div`
  height: 1px;
  background-color: #ececec;
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #7b7b7b;
`;

const TermContentsBox = styled.div`
  padding: 26px 0;
  .contentsborder {
    width: 948px;
    height: 245px;
    border: 1px solid #8294cd;
    border-radius: 10px;
    margin-top: 15px;
    overflow-y: scroll;
    padding: 20px 60px 20px 30px;
  }
`;
