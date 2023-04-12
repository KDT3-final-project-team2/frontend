import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import styled from 'styled-components';
import AlertModal from '../common/AlertModal';
import { deleteResume } from '@/api/applicantApi';
import { ViewPDF } from './pdf/ViewPDF';
import { ModalBackground } from '../mainhome/EmailModal';
import { MainContainer } from '@/pages/company/CompanyJobPosting';
import { ButtonContainer, ModalOverlay, PdfContainer } from './ResumeModal';

const ResumeList = ({
  resume,
  setResume,
  setResumeModal,
}: {
  resume: any;
  setResume: React.Dispatch<React.SetStateAction<string>>;
  setResumeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const onClickDropDwon = () => {
    setOpen(!open);
  };

  const handleEditResume = () => {};

  const onUrlClick = () => {
    setShowModal(true);
  };
  const onPdfClose = () => {
    setShowModal(false);
  };

  const handleDeleteResume = async () => {
    try {
      dispatch(showLoading());
      const res = await deleteResume();
      if (res.stateCode === 200) {
        AlertModal({
          message: '이력서 삭제가 완료되었습니다.',
        });
        setResume('');
        setResumeModal(false);
      } else {
        AlertModal({
          message: '삭제할 이력서가 없습니다.',
        });
      }
    } catch (error) {
      AlertModal({
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <>
      <List>
        <Inner>
          <p className='name'>{resume.split('/').pop().split('\\').pop()}</p>
          <div className='last'>
            <button onClick={onUrlClick}>미리보기</button>
            <button onClick={onClickDropDwon}>
              <img src='/icons/more_vertical.png' />
            </button>
            {open && (
              <DropDownBox>
                <div onClick={handleEditResume}>수정</div>
                <div onClick={handleDeleteResume}>삭제</div>
              </DropDownBox>
            )}
          </div>
        </Inner>
      </List>
      {showModal ? (
        <ModalBackground>
          <MainContainer>
            <ModalOverlay showModal={showModal}>
              <PdfContainer>
                <ButtonContainer>
                  <button onClick={onPdfClose}>
                    <img src='\icons\close.png' alt='닫기' />
                  </button>
                </ButtonContainer>
                <ViewPDF fileUrl={resume} />
              </PdfContainer>
            </ModalOverlay>
          </MainContainer>
        </ModalBackground>
      ) : null}
    </>
  );
};

const List = styled.div`
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  border-radius: 20px;
  align-items: center;
  margin-bottom: 18px;
  gap: 30px;
  div {
    .last {
      display: flex;
      margin-left: auto;
      gap: 20px;
      position: relative;
    }
    button {
      padding: 0;
      background-color: transparent;
      :first-child {
        font-size: 13px;
        font-weight: bold;
        background-color: var(--color-gray-400);
        color: rgb(255, 255, 255);
        border-radius: 20px;
        line-height: 29px;
        height: 28px;
        padding: 3px 12px 0px;
      }
    }
  }
  .name {
    color: var(--color-gray-600);
    font-size: 16px;
    font-weight: bold;
    padding-top: 3px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 60px);
    background-color: var(--color-gray-200);
  }
`;

const DropDownBox = styled.div`
  position: absolute;
  width: 140px;
  height: 99px;
  right: -12px;
  top: 40px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  border-radius: 10px;
  padding: 16px 0;
  z-index: 1;
  div {
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
  }
`;

export default ResumeList;
