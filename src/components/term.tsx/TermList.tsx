import { ITermListProps } from '@/@types/props';
import { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { IconContainer, NoticeContainer } from '../companyjobposting/JobPostingList';
import { NoticeTitle } from './../companyjobposting/JobPostingList';
import TermPostEditModal from './TermPostEditModal';
import ConfirmModal from '../common/ConfirmModal';
import { getAdminTermSingle, updateAdminTerm } from '@/api/adminApi';
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getCompanyTermSingle, updateCompanyTerm } from '@/api/companyApi';
import { dateToString } from '@/utils/dateToSTring';
import { termChangeToEnglish } from '@/utils/termChangeToEnglish';

const TermList = ({ index, term, setSaveBtnText, setTermModalOpen, saveBtnText }: ITermListProps) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  let termSingle: any;

  if (location.pathname === '/admin/term') {
    const { data } = useQuery(
      ['adminTerm', term?.termId],
      () => {
        if (term) return getAdminTermSingle(term?.termId);
      },
      {
        enabled: !!term?.termId,
      },
    );
    termSingle = data;
  } else {
    const { data } = useQuery(
      ['companyTerm', term?.termId],
      () => {
        if (term) return getCompanyTermSingle(term?.termId);
      },
      {
        enabled: !!term?.termId,
      },
    );
    termSingle = data;
  }

  const queryClient = useQueryClient();

  let termEditMutate: UseMutateFunction<
    any,
    unknown,
    {
      termId: number;
      termData: IAdminTermPostData;
    },
    unknown
  >;
  if (location.pathname === '/admin/term') {
    const { mutate } = useMutation(updateAdminTerm, {
      onSuccess: () => {
        queryClient.invalidateQueries(['adminTerm']);
      },
    });
    termEditMutate = mutate;
  } else {
    const { mutate } = useMutation(updateCompanyTerm, {
      onSuccess: () => {
        queryClient.invalidateQueries(['companyTerm']);
      },
    });
    termEditMutate = mutate;
  }

  const onClickListOpen = () => {
    setOpen(!open);
  };

  const onClickTermEdit = (event: MouseEvent<HTMLImageElement>) => {
    event?.stopPropagation();
    setEditModalOpen(true);
    setSaveBtnText('수정완료');
  };

  const onClickDeleteTerm = (event: MouseEvent<HTMLImageElement>) => {
    event?.stopPropagation();
    const update = () => {
      termEditMutate({
        termId: termSingle.data.termId,
        termData: {
          type: termChangeToEnglish(termSingle.data.type),
          version: termSingle.data.version,
          status: 'DISCARD',
          content: termSingle.data.content,
        },
      });
    };

    ConfirmModal({ message: '폐기하시겠습니까?.', action: update });
  };

  return (
    <>
      {term?.status === '사용' && (
        <TermListContainer open={open}>
          <div className='termBox' onClick={onClickListOpen}>
            <TermType>{term?.type}</TermType>
            <IconContainer>
              <CreateDate>{dateToString(term?.editDate)}</CreateDate>
              <Icon src='/icons/edit.png' onClick={onClickTermEdit} />
              <Icon src='/icons/trashcan.png' onClick={onClickDeleteTerm} />
            </IconContainer>
          </div>
          {open && (
            <>
              <Border></Border>
              <TermContentsBox>
                <Date>{dateToString(term?.editDate)}</Date>
                <div className='contentsborder'>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: termSingle?.data.content,
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
          defaultData={termSingle.data}
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
