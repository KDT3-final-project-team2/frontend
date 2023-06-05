import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ModalBackground } from '@components/mainhome/EmailModal';
import { ViewPDF } from './pdf/ViewPDF';
import { pdfjs } from 'react-pdf';
import AlertModal from '../common/AlertModal';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { showLoading, hideLoading } from '@/store/loadingSlice';
import { requestPutResume, requestResume } from '@/api/applicantApi';

// workerSrc 정의 하지 않으면 pdf 보여지지 않습니다.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeModal = ({
  setResumeModal,
  getResume,
  resume,
  submitTitle,
}: {
  setResumeModal: React.Dispatch<React.SetStateAction<boolean>>;
  resume: string;
  getResume: any;
  submitTitle: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [pdfFileList, setPdfFileList] = useState<Array<File>>([]);
  const [pdfUrl, setPdfUrl] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const fileRef = useRef<HTMLInputElement>(null);

  const getUrl = (file: File) => {
    const blob = new Blob([file]);
    const pdfUrl = URL.createObjectURL(blob);
    setPdfUrl(pdfUrl);
  };

  const onPdfFileUpload = (e: any) => {
    const selectedList: Array<File> = Array.from(e.target.files);
    const getAddList = selectedList.map(item => item);
    getUrl(getAddList[0]);
    setPdfFileList(selectedList);
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const onDeleteTarget = () => {
    setPdfFileList([]);
  };

  const onUrlClick = (e: any) => {
    setShowModal(true);
  };

  const onPdfClose = (e: any) => {
    setShowModal(false);
  };

  const FileResultList = () => {
    return (
      <>
        {pdfFileList.map((item, index) => (
          <FileResultBody key={index}>
            <FileResultRow>
              <p>{item.name}</p>
              <div>
                <span onClick={onUrlClick}>미리보기</span>
                <button onClick={onDeleteTarget}>
                  <img src='/icons/close.png' alt='닫기' />
                </button>
              </div>
            </FileResultRow>
          </FileResultBody>
        ))}
      </>
    );
  };

  const submitResume = async (file: any) => {
    const formData = new FormData();
    formData.append('resume', file);
    try {
      dispatch(showLoading());
      let res;
      submitTitle ? (res = await requestPutResume(formData)) : (res = await requestResume(formData));
      console.log(resume);
      if (resume === '') {
        if (res.stateCode === 200) {
          AlertModal({
            message: '등록됐습니다.',
          });
          setResumeModal(false);
          getResume();
        }
      } else {
        if (res.stateCode === 200) {
          AlertModal({
            message: '수정되었습니다.',
          });
          setResumeModal(false);
          getResume();
        }
      }
    } catch (error) {
      console.log(error);
      AlertModal({
        message: '등록에 실패했습니다. 다시 시도해주세요',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <ModalBackground>
      <div id='container'>
        <header>
          {submitTitle ? <h3>이력서 수정</h3> : <h3>이력서 등록</h3>}
          <img src='/icons/close.png' alt='닫기' onClick={() => setResumeModal(false)} />
        </header>
        <div id='content'>
          <p style={{ marginTop: '20px', fontSize: '15px' }}>이력서는 PDF 형식으로 올려주시기 바랍니다.</p>
          <MainContainer>
            <ModalOverlay showModal={showModal}>
              <PdfContainer>
                <ButtonContainer>
                  <button onClick={onPdfClose}>
                    <img src='\icons\close.png' alt='닫기' />
                  </button>
                </ButtonContainer>
                <ViewPDF fileUrl={pdfUrl} />
              </PdfContainer>
            </ModalOverlay>
            {pdfFileList.length === 0 ? (
              <form>
                <label htmlFor='uploadFile'>파일 업로드하기</label>
                <input
                  type='file'
                  id='uploadFile'
                  accept='.pdf'
                  multiple={true}
                  onChange={onPdfFileUpload}
                  ref={fileRef}
                />
              </form>
            ) : (
              <FileResultList />
            )}
          </MainContainer>
        </div>
        <div id='buttons'>
          <button onClick={() => setResumeModal(false)}>취소</button>
          <button onClick={() => submitResume(selectedFile)}>등록</button>
        </div>
      </div>
    </ModalBackground>
  );
};

const MainContainer = styled.div`
  height: 120px;
  margin-top: 20px;
  form {
    &.hide {
      display: none !important;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 40px;
      line-height: 41px;
      border-radius: 8px;
      background-color: var(--color-gray-100);
      cursor: pointer;
    }
    input {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
`;

const FileResultBody = styled.div`
  display: flex;
  width: 100%;
`;
const FileResultRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  box-shadow: rgba(67, 87, 172, 0.15) 2px 2px 10px 2px;
  border-radius: 20px;
  -webkit-box-align: center;
  padding: 20px 30px;
  p {
    color: var(--color-gray-600);
    font-size: 16px;
    font-weight: bold;
    padding-top: 3px;
  }
  div {
    display: flex;
    gap: 20px;
    span {
      font-size: 13px;
      font-weight: bold;
      background-color: var(--color-gray-400);
      color: rgb(255, 255, 255);
      border-radius: 20px;
      line-height: 29px;
      height: 28px;
      padding: 0px 12px;
      cursor: pointer;
    }
    button {
      background: transparent;
    }
  }
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${({ showModal }: { showModal: boolean }) => (showModal ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  padding-top: 4%;
`;

export const PdfContainer = styled.div`
  display: flex;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  button {
    width: 30px;
    height: 30px;
    background: transparent;
    padding: 0;
  }
`;

export default ResumeModal;
