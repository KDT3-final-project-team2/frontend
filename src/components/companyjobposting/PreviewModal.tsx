import styled from 'styled-components';
import { Close, ModalBackground, ModalContainer, ModalContentsBox, QualificationsTitle } from './PostEditModal';
import { IPostingContensProps, IPreviewModalProps } from '../../@types/props';
import { useQuery } from '@tanstack/react-query';
import { getCompanyJobPostFile, getCompanyJobpostSingle } from '@/api/companyApi';
import { dateToString } from '@/utils/dateToSTring';

const PreviewModal = ({ setPreviewModalOpen, jobPosts }: IPreviewModalProps) => {
  const onClickClose = () => {
    setPreviewModalOpen(false);
  };

  const { data: jobPostSingle } = useQuery(
    ['jobPostSingle', jobPosts?.postId],
    () => getCompanyJobpostSingle(jobPosts?.postId),
    {
      enabled: !!jobPosts?.postId,
    },
  );

  const { data: jobPostFile } = useQuery(
    ['jobPostFile', 'jobPosts?.postId'],
    () => getCompanyJobPostFile(jobPosts?.postId),
    {
      enabled: !!jobPosts?.postId,
    },
  );

  console.log('jobPostFile', jobPostFile);

  const openPDF = () => {
    window.open(`${jobPostFile?.data}`);
  };

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <PreviewModalHeader>
            <TitleBox>
              <SiteTitle>{jobPostSingle?.data.companyNm}</SiteTitle>
              <PostingTitle>{jobPostSingle?.data.title}</PostingTitle>
            </TitleBox>
            <Close src={'/icons/close.png'} onClick={onClickClose} />
          </PreviewModalHeader>
          <ApplyBtn>지원하기</ApplyBtn>
          <ModalContentsBox>
            <QualificationsTitle>모집분야 및 지원자격</QualificationsTitle>
            <QualificationsBox>
              <PostingContents title='직종' contents={jobPostSingle?.data.sector} />
              <PostingContents title='경력' contents={jobPostSingle?.data.workExperience} />
              <PostingContents title='학력' contents={jobPostSingle?.data.education} />
            </QualificationsBox>
            <QualificationsBox>
              <PostingContents title='모집인원' contents={jobPostSingle?.data.maxApplicants} />
              <PostingContents title='마감일' contents={dateToString(jobPostSingle?.data.dueDate)} />
            </QualificationsBox>
            <QualificationsBox>
              <ContentsBox>
                <ContentsTitle>공고 PDF</ContentsTitle>
                <FileBox>
                  <File data={jobPostFile?.data} type='application/pdf' />
                </FileBox>
                <PdfBtn onClick={openPDF}>pdf 열기</PdfBtn>
              </ContentsBox>
            </QualificationsBox>
          </ModalContentsBox>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export const PostingContents = ({ title, contents }: IPostingContensProps) => {
  return (
    <ContentsBox>
      <ContentsTitle>{title}</ContentsTitle>
      <Contents>{contents}</Contents>
    </ContentsBox>
  );
};

export default PreviewModal;

const PdfBtn = styled.button`
  background-color: var(--color-blue);
  border-radius: 10px;
  color: #fff;
  padding: 7px 14px;
  font-size: 15px;
`;

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
  border-radius: 10px;
  width: 100px;
  height: 110px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const File = styled.object`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
`;
