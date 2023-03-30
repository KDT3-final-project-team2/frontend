import styled from 'styled-components';
import { Close, ModalBackground, ModalContainer, ModalContentsBox, QualificationsTitle } from './PostEditModal';
import close from '../../assets/icons/close.png';
import pdfFile from '../../assets/icons/pdfFile.png';
import { IPostingContensProps, IPreviewModalProps } from '../../@types/props';

const PreviewModal = ({ setPreviewModalOpen }: IPreviewModalProps) => {
  const onClickClose = () => {
    setPreviewModalOpen(false);
  };

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <PreviewModalHeader>
            <TitleBox>
              <SiteTitle>MEDIMATCH</SiteTitle>
              <PostingTitle>2023년도 정규직 간호사 모집공고</PostingTitle>
            </TitleBox>
            <Close src={close} onClick={onClickClose} />
          </PreviewModalHeader>
          <ApplyBtn>지원하기</ApplyBtn>
          <ModalContentsBox>
            <QualificationsTitle>모집분야 및 지원자격</QualificationsTitle>
            <QualificationsBox>
              <PostingContents title='직종' contents='간호직 &lt; 간호사' />
              <PostingContents title='경력' contents='신입 / 인턴 경험' />
              <PostingContents title='학력' contents='학력무관' />
            </QualificationsBox>
            <QualificationsBox>
              <PostingContents title='모집인원' contents='4명' />
              <PostingContents title='마감일' contents='2023.04.12' />
            </QualificationsBox>
            <QualificationsBox>
              <ContentsBox>
                <ContentsTitle>공고 PDF</ContentsTitle>
                <FileBox>
                  <File src={pdfFile} />
                </FileBox>
              </ContentsBox>
            </QualificationsBox>
          </ModalContentsBox>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

const PostingContents = ({ title, contents }: IPostingContensProps) => {
  return (
    <ContentsBox>
      <ContentsTitle>{title}</ContentsTitle>
      <Contents>{contents}</Contents>
    </ContentsBox>
  );
};

export default PreviewModal;

const PreviewModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0px 44px 15px 44px;
  border-bottom: 1px solid #ececec;
`;

const TitleBox = styled.div`
  margin-top: 28px;
`;

const PostingTitle = styled.h1`
  font-size: 26px;
  padding-top: 10px;
`;

const SiteTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
`;

const ApplyBtn = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 20px;
  background: #d2d5da;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin: 35px 48px 0 auto;
`;

const QualificationsBox = styled.div`
  width: 97%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
  border-radius: 19px;
  padding: 27px 0 27px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

const ContentsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const ContentsTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  color: #374151;
`;

const Contents = styled.p``;

const FileBox = styled.div`
  background: #d2d5da;
  border-radius: 20px;
  width: 100px;
  height: 110px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const File = styled.img`
  width: 25px;
`;