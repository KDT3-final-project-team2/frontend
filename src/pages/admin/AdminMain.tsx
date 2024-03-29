import { getStatics } from '@/api/adminApi';
import PlanUserBox from '@/components/mainhome/PlanUserBox';
import UserStaticsBox from '@/components/mainhome/UserStaticsBox';
import { PlanUsers } from '@/constants/PlanUsers';
import { userStatics } from '@/constants/steps';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { PictorialChart, DonutChart, VerticalBarChart } from 'amazing-react-charts';
import { getToday } from '@/utils/getToday';

const AdminMain = () => {
  const dispatch = useAppDispatch();
  const [tap, setTap] = useState('사용자 현황');

  // const { data, isLoading } = useQuery<AdminStaticsData>(['adminStatics'], getStatics, {
  //   staleTime: Infinity,
  //   cacheTime: Infinity,
  // });

  // if (isLoading) {
  //   dispatch(showLoading());
  //   return null;
  // } else {
  //   dispatch(hideLoading());
  const data = {
    개인회원당해인원: 11,
    기업회원당해인원: 9,
    '12월가입인원': 0,
    '5월가입인원': 0,
    개인회원Total인원: 11,
    개인회원당일인원: 0,
    '8월가입인원': 0,
    '3월가입인원': 0,
    '9월가입인원': 0,
    '1월가입인원': 0,
    '11월가입인원': 0,
    MEDICAL_TECHNICIAN: 1,
    기업회원당일인원: 0,
    개인회원당월인원: 11,
    '6월가입인원': 0,
    기업회원Total인원: 9,
    '7월가입인원': 0,
    '4월가입인원': 20,
    '10월가입인원': 0,
    기업회원당월인원: 9,
    DOCTOR: 7,
    NURSE_AIDE: 3,
    '2월가입인원': 0,
    NURSE: 3,
    MEDICAL_RECORDS_PROFESSIONAL: 2,
  };

  return (
    <Container>
      <div className='header'>
        {userStatics.map(menuName => (
          <Tap key={menuName} onClick={() => setTap(menuName)} isActive={tap === menuName}>
            {menuName}
          </Tap>
        ))}
      </div>
      <div className='body'>
        <h3>{tap}</h3>
        {tap === '사용자 현황' ? (
          <>
            <div className='first-row'>
              <UserStaticsBox
                user={'병원'}
                total={data?.기업회원Total인원}
                year={data?.기업회원당해인원}
                month={data?.기업회원당월인원}
                day={data?.기업회원당일인원}
              />
              <UserStaticsBox
                user={'지원자'}
                total={data?.개인회원Total인원}
                year={data?.개인회원당해인원}
                month={data?.개인회원당월인원}
                day={data?.개인회원당일인원}
              />
            </div>

            <div className='second-row'>
              <div className='verticalBarBox'>
                <h5>신규회원</h5>
                <p>기준 : {getToday()}</p>
                <div className='flex' style={{ height: '100%' }}>
                  {[
                    data?.['1월가입인원'],
                    data?.['2월가입인원'],
                    data?.['3월가입인원'],
                    data?.['4월가입인원'],
                    data?.['5월가입인원'],
                    data?.['6월가입인원'],
                    data?.['7월가입인원'],
                    data?.['8월가입인원'],
                    data?.['9월가입인원'],
                    data?.['10월가입인원'],
                    data?.['11월가입인원'],
                    data?.['12월가입인원'],
                  ].map((data, index) => (
                    <div key={index} className='stick'>
                      <div style={{ height: `${data}%` }} className='innerStick'>
                        {data}
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex' style={{ height: '30px', width: '100%' }}>
                  {Array.from(Array(12).keys()).map((val, index) => (
                    <div key={val} className='flex_month'>
                      {index + 1}월
                    </div>
                  ))}
                </div>
              </div>
              <div className='donutBox'>
                <h5>지원자 직무</h5>
                <p>기준 : {getToday()}</p>
                <DonutChart
                  // selectedMode
                  colors={['#4357AC', '#8294CD', '#B3C2E7', '#7B7B7B', ' #FFC847']}
                  legendPosition='inside'
                  color='white'
                  centerPieValueFontSize={28}
                  center={['50%', '50%']}
                  donutRadius={['35%', '70%']}
                  donutCenterValue=''
                  legendType='plain'
                  data={[
                    { name: '의사', value: data?.DOCTOR || 0 },
                    { name: '간호조무사', value: data?.NURSE_AIDE || 0 },
                    { name: '간호사', value: data?.NURSE || 0 },
                    { name: '의료기사', value: data?.MEDICAL_TECHNICIAN || 0 },
                    { name: '원무과', value: data?.MEDICAL_RECORDS_PROFESSIONAL || 0 },
                  ]}
                />
              </div>
            </div>
          </>
        ) : (
          <div className='boxs'>
            {PlanUsers.map(user => (
              <PlanUserBox key={user.id} {...user} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AdminMain;

const Container = styled.div`
  padding: 30px 70px 0;
  box-sizing: border-box;

  .header {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }
  .body {
    width: 100%;
    padding: 40px;
    h3 {
      font-weight: 700;
      font-size: 34px;
      line-height: 40px;
      color: #374151;
      margin-bottom: 50px;
    }
    .first-row {
      display: flex;
      width: 100%;
      gap: 33px;
      margin-bottom: 60px;
    }
    .second-row {
      width: 100%;
      display: flex;
      gap: 24px;
      .verticalBarBox {
        background: #ffffff;
        box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
        border-radius: 20px;
        padding: 20px 30px 23px;
        position: relative;
        display: flex;
        width: 63%;
        height: 350px;
        display: flex;
        flex-direction: column;

        .flex {
          display: grid;
          grid-template-columns: repeat(12, 30px);
          /* gap: 30px; */
          @media (max-width: 1600px) {
            gap: 10px;
          }
          justify-content: space-around;
          align-items: flex-end;
          padding: 10px;
          .stick {
            width: 30px;
            background: #b1bee7;
            padding-top: 8px;
            border-radius: 20px;
            color: white;
            height: 100%;
            overflow: hidden;
            position: relative;
            .innerStick {
              position: absolute;
              bottom: 0;
              background-color: #4357ac;
              width: 30px;
              border-radius: 20px;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              padding-top: 10px;
              padding-bottom: 15px;
            }
          }
          .flex_month {
            display: flex;
            width: 30px;
            /* font-size: 10px; */
            justify-content: center;
          }
        }
      }
      .donutBox {
        background: #ffffff;
        box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
        border-radius: 20px;
        padding: 20px 30px 23px;
        position: relative;
        display: flex;
        height: 350px;
        display: flex;
        flex-direction: column;
        width: 35%;
        div {
          position: absolute;
          top: -8px;
        }
      }
      h5 {
        color: #374151;
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
      }
      p {
        font-size: 12px;
        line-height: 16px;
        color: #7b7b7b;
        position: absolute;
        right: 30px;
        top: 18px;
      }
    }
    .boxs {
      display: flex;
      width: 100%;
      gap: 16px;
      justify-content: center;
    }
  }
`;

const Tap = styled.h2<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  width: 151px;
  color: ${({ isActive }) => (isActive ? '#4357AC' : '#6d7280')};
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  cursor: pointer;
  position: relative;

  &::after {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    content: '';
    width: 151px;
    height: 5px;
    background-color: #4357ac;
    border-radius: 2.5px;
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
  }
`;
