import { useState } from 'react';
import styled from 'styled-components';
import { IJobPostingListProps } from '../../@types/props';
import PreviewModal from './PreviewModal';
import PostEditModal from './PostEditModal';

const JobPostingList = ({ jobPosts, setSaveBtnText, saveBtnText }: IJobPostingListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const onClickToggle = () => {
    setIsOpen(!isOpen);
  };

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
    // put or delete /company/jobposts/{jobpostId}
  };

  return (
    <>
      <NoticeContainer onClick={onClickClose}>
        <NoticeTitle>{jobPosts.title}</NoticeTitle>
        <IconContainer>
          <Preview onClick={PreviewModalOpen}>미리보기</Preview>
          <Link src='/icons/link.png' />
          <DropDown>
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
          </DropDown>
        </IconContainer>
      </NoticeContainer>
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

const Vertical = styled(Link)``;

const DropDown = styled.div`
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
