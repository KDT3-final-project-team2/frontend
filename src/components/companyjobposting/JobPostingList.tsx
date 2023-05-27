import { useState } from 'react';
import styled from 'styled-components';
import { IJobPostingListProps } from '../../@types/props';
import PreviewModal from './PreviewModal';
import PostEditModal from './PostEditModal';
import ConfirmModal from '../common/ConfirmModal';
import DropDown from './DropDown';
import useOpenToggle from '@/hooks/useOpenToggle';

const JobPostingList = ({ jobPosts, setSaveBtnText, saveBtnText, JobDeleteMutate }: IJobPostingListProps) => {
  const { isOpen, toggleOpen, setIsOpen } = useOpenToggle();
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const onClickClose = () => {
    if (isOpen) setIsOpen(false);
  };

  const EditModalOpen = () => {
    setIsEditModal(true);
    setSaveBtnText('수정완료');
  };

  const PreviewModalOpen = () => {
    setPreviewModalOpen(true);
  };

  const onClickDisCard = () => {
    ConfirmModal({
      message: '폐기하시겠습니까?',
      action: () => {
        JobDeleteMutate(jobPosts?.postId);
      },
    });
  };

  return (
    <>
      {jobPosts.status === '모집중' && (
        <NoticeContainer onClick={onClickClose}>
          <NoticeTitle>{jobPosts.title}</NoticeTitle>
          <IconContainer>
            <Preview onClick={PreviewModalOpen}>미리보기</Preview>
            <Link src='/icons/link.png' />
            <DropDown
              isOpen={isOpen}
              onClickToggle={toggleOpen}
              EditModalOpen={EditModalOpen}
              onClickDisCard={onClickDisCard}
            />
          </IconContainer>
        </NoticeContainer>
      )}
      {previewModalOpen && <PreviewModal setPreviewModalOpen={setPreviewModalOpen} jobPosts={jobPosts} />}
      {isEditModal && <PostEditModal setIsEditModal={setIsEditModal} jobPosts={jobPosts} saveBtnText={saveBtnText} />}
    </>
  );
};

export default JobPostingList;

export const NoticeContainer = styled.div`
  width: 93%;
  height: 70px;
  box-shadow: 2px 2px 10px 2px #4357ac26;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 20px;
`;

export const NoticeTitle = styled.p`
  font-weight: 700;
  font-size: 17px;
  color: #374151;
`;

const Preview = styled.button`
  width: 80px;
  height: 28px;
  background: #7b7b7b;
  border-radius: 14px;
  padding: 2px 12px 2px 12px;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Link = styled.img`
  cursor: pointer;
`;
