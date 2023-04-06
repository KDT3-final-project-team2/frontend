import { ITermListProps } from '@/@types/props';
import { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { IconContainer, NoticeContainer } from '../companyjobposting/JobPostingList';
import { NoticeTitle } from './../companyjobposting/JobPostingList';
import TermPostEditModal from './TermPostEditModal';
import ConfirmModal from '../common/ConfirmModal';
import { useUpdateAdminTerm } from '@/api/adminApi';

const TermList = ({ index, adminTerm, setSaveBtnText, setTermModalOpen, saveBtnText }: ITermListProps) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const updateAdminTerm = useUpdateAdminTerm();

  const onClickListOpen = () => {
    setOpen(!open);
  };

  let type = '';
  switch (adminTerm?.type) {
    case 'SERVICE':
      type = '서비스이용약관';
      break;
    case 'PRIVACY':
      type = '개인정보처리방침';
      break;
    case 'THIRD_PARTY':
      type = '제3자정보제공';
      break;
    case 'MARKETING':
      type = '개인정보마케팅이용';
      break;
    default:
      type = adminTerm?.type;
  }

  const onClickTermEdit = (event: MouseEvent<HTMLImageElement>) => {
    event?.stopPropagation();
    setEditModalOpen(true);
    setSaveBtnText('수정완료');
  };

  const onClickDeleteTerm = (event: MouseEvent<HTMLImageElement>) => {
    event?.stopPropagation();
    const update = () => {
      updateAdminTerm({
        termId: adminTerm?.termId,
        data: {
          type: adminTerm?.type,
          version: adminTerm?.version,
          status: 'DISCARD',
          content: adminTerm?.content,
        },
      });
    };

    ConfirmModal({ message: '폐기하시겠습니까?.', action: update });
  };

  return (
    <>
      {adminTerm.status === 'USE' && (
        <TermListContainer open={open}>
          <div className='termBox' onClick={onClickListOpen}>
            <TermType>{type}</TermType>
            <IconContainer>
              <CreateDate>{adminTerm?.createDate}</CreateDate>
              <Icon src='/icons/edit.png' onClick={onClickTermEdit} />
              <Icon src='/icons/trashcan.png' onClick={onClickDeleteTerm} />
            </IconContainer>
          </div>
          {open && (
            <>
              <Border></Border>
              <TermContentsBox>
                <Date>{adminTerm?.createDate}</Date>
                <div className='contentsborder'>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: adminTerm?.content,
                    }}
                  ></p>
                </div>
              </TermContentsBox>
            </>
          )}
        </TermListContainer>
      )}
      {editModalOpen && (
        <TermPostEditModal
          setTermModalOpen={setTermModalOpen}
          saveBtnText={saveBtnText}
          setEditModalOpen={setEditModalOpen}
          defaultData={adminTerm}
        />
      )}
    </>
  );
};

export default TermList;

export const TermType = styled(NoticeTitle)`
  padding-top: 6px;
`;

export const CreateDate = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #4b5563;
  padding-top: 5px;
`;

const Icon = styled.img`
  cursor: pointer;
`;

export const TermListContainer = styled.div`
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
  .termBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    cursor: pointer;
  }
`;

export const Border = styled.div`
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
    width: 99%;
    height: 245px;
    border: 1px solid #8294cd;
    border-radius: 10px;
    margin-top: 15px;
    overflow-y: scroll;
    padding: 20px 60px 20px 30px;
  }
`;
