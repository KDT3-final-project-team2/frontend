import { cancelApplication } from '@/api/applicantApi';
import { getJobpostDetail } from '@/api/applicantApi';
import { getDday } from '@/utils/getDday';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Avvvatars from 'avvvatars-react';
import { useState } from 'react';
import styled from 'styled-components';
import ConfirmModal from '../common/ConfirmModal';

const JobList = ({ index, application }: { index: number; application: MyApplicationData }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const {
    applicationId,
    companyName,
    jobpostTitle,
    jobpostId,
    applicationStatusType,
    applicationInterviewTime,
    applicationApplyDate,
    applicationFilepath,
  } = application;

  const { data } = useQuery(['applicationDetail', jobpostId], () => getJobpostDetail(jobpostId), {
    staleTime: 1000 * 60 * 60 * 8,
  });
  const queryClient = useQueryClient();
  const { mutate: deleteApplication } = useMutation(cancelApplication, {
    onSuccess: () => queryClient.invalidateQueries(['myApplications']),
  });

  return (
    <ListComponent>
      <Head onClick={() => setOpen(!open)} open={open}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '32px' }}>
          <Avvvatars style='shape' value={companyName}></Avvvatars>
          <p className='name'>{companyName}</p>
          <p className='title'>{jobpostTitle}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p className='applyDate'>{applicationApplyDate.split('T')[0]}</p>
          <div className='dDay'>지원 D{getDday(applicationApplyDate.split('T')[0])}</div>
        </div>
      </Head>

      <Body>
        {open ? (
          <>
            <div className='horizonLine'></div>
            <div className='content'>
              <div style={{ width: '210px', height: '297px', backgroundColor: '#ECECEC' }}>공고 미리보기?</div>
              <div>
                <p>모집분야 및 지원자격</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '30px' }}>
                  <div className='sector'>{data?.jobpostSector}</div>
                  <div className='tag'># {data?.jobpostEducation}</div>
                  <div className='tag'># {data?.jobpostWorkExperience}</div>
                </div>
                <p>모집인원</p>
                <div>{data?.jobpostRecruitNum}명</div>
                <p>공고 마감일</p>
                <div>{data?.jobpostDueDate.split('T')[0]}</div>
                <p>제출 이력서</p>
                <div>{applicationFilepath}</div>
                <div className='buttons'>
                  <button
                    onClick={() => {
                      ConfirmModal({
                        message: '지원취소 후 재지원이 불가할 수 있습니다. 취소하시겠습니까?',
                        action: () => deleteApplication(jobpostId),
                      });
                    }}
                  >
                    지원취소
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Body>
    </ListComponent>
  );
};

export default JobList;

const ListComponent = styled.div`
  width: 100%;
  position: relative;
  .sector,
  .tag,
  .dDay {
    border-radius: 14px;
    padding: 3px 12px 0;
    font-size: 13px;
    line-height: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .sector {
    background-color: var(--color-blue);
    color: white;
  }
  .tag {
    background-color: #ececec;
    color: #7b7b7b;
  }
`;

const Head = styled.div`
  width: 100%;
  height: ${({ open }: { open: boolean }) => {
    return open ? '460px' : '70px';
  }};
  box-shadow: 2px 2px 10px 2px #4357ac26;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: ${({ open }: { open: boolean }) => {
    return open ? 'flex-start' : 'center';
  }};
  justify-content: space-between;
  padding: ${({ open }: { open: boolean }) => {
    return open ? '15px 40px' : '0 40px';
  }};
  margin-bottom: 20px;

  .name,
  .applyDate {
    color: #4b5563;
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
    margin-left: 15px;
    margin-top: 3px;
    margin-right: 20px;
  }
  .title {
    width: fit-content;
    line-height: 32px;
    margin-top: 3px;
    margin-right: 10px;
  }
  .dDay {
    background: #4b5563;
    color: white;
    margin-right: 20px;
  }
`;

const Body = styled.div`
  position: absolute;
  top: 60px;
  left: 40px;
  right: 40px;
  .horizonLine {
    width: 100%;
    border: 1px solid #ececec;
    /* margin-bottom: 38px; */
  }
  .content {
    padding: 35px;
    display: flex;
    gap: 54px;
    p {
      color: #4b5563;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      margin: 10px 0 10px;
    }
    div {
      margin: 10px 0 21px;
    }
    .buttons {
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: flex;
      gap: 16px;
      button {
        width: 140px;
        height: 40px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: white;
        background-color: #7b7b7b;
      }
    }
  }
`;
