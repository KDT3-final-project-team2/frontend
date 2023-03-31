import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
// import { HorizontalBarChart, PictorialChart } from 'amazing-react-charts';

type Props = {};

const stats = {
  applicantsTotal: '12',
  applicantsAge: {},
};

// "applicantsTotal", long
// "applicantsAge", long
// "applicantsGender, string
// "applicantEducation"

const ApplicantsStats = (props: Props) => {
  const dispatch = useAppDispatch();
  const [stats, setStats] = useState([]);

  const getStats = async () => {
    try {
      dispatch(showLoading());
    } catch (error) {
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <Applicants>
      <Total>
        <div>
          <p>모집인원</p>
          <h2>
            <span>4</span>명
          </h2>
        </div>
        <div>
          <p>지원자수</p>
          <h2>
            <span>13</span>명
          </h2>
        </div>
      </Total>
      <Type>
        <Age>
          <h3>연령</h3>
          <div style={{ position: 'absolute', width: '100%', top: '0', left: '-12px' }}>
            {/* <HorizontalBarChart
              xComplement='%'
              barWidth={5}
              yComplement='%'
              data={[
                {
                  label: '20대',
                  result: 0,
                  style: { color: '#4357AC' },
                  itemId: '50대',
                },
                {
                  label: '30대',
                  result: 10,
                  style: { color: '#4357AC' },
                  itemId: 'b',
                },
                {
                  label: '40대',
                  result: 40,
                  style: { color: '#4357AC' },
                  itemId: 'c',
                },
                {
                  label: '50대',
                  result: 50,
                  style: { color: '#4357AC' },
                  itemId: 'c',
                },
              ]}
            /> */}
          </div>
        </Age>
        <Gender>
          <h3>성별</h3>
          <div style={{ width: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <PictorialChart
              grid={{ bottom: '0' }}
              height={240}
              color='#E95656'
              tooltip={{
                label: 'acidents',
                labelComplement: 0,
                result: 'problems',
                resultComplement: '30%',
              }}
              data={[
                {
                  value: 90,
                  symbol:
                    'path://M27 9C27 13.9706 22.9706 18 18 18C13.0294 18 9 13.9706 9 9C9 4.02944 13.0294 0 18 0C22.9706 0 27 4.02944 27 9Z' +
                    'M8.42895 21C7.43365 21 6.5898 21.7319 6.44905 22.7172L0.0204768 67.7172C-0.151647 68.922 0.783277 70 2.00038 70H9.06278L10.5946 99.1051C10.6505 100.167 11.5281 101 12.5919 101H21.7969C22.8606 101 23.7382 100.167 23.7941 99.1051L25.3259 70H32.4345C33.6355 70 34.5657 68.949 34.4197 67.7569L28.9095 22.7569C28.7867 21.7538 27.9349 21 26.9243 21H8.42895Z',
                },
              ]}
            /> */}
            <p>여자</p>
          </div>
          <div style={{ width: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <PictorialChart
              grid={{ bottom: '0' }}
              height={240}
              color='#5691e9'
              tooltip={{
                label: 'acidents',
                labelComplement: 0,
                result: 'problems',
                resultComplement: '30%',
              }}
              data={[
                {
                  value: 90,
                  symbol:
                    'path://M26 9C26 13.9706 21.9706 18 17 18C12.0295 18 8.00004 13.9706 8.00004 9C8.00004 4.02944 12.0295 0 17 0C21.9706 0 26 4.02944 26 9Z' +
                    'M4.15991 21C1.82986 21 -0.00701858 22.9836 0.171687 25.3068L2.69835 58.1534C2.7785 59.1954 3.64739 60 4.69246 60H6.05435L8.77457 98.1423C8.84922 99.189 9.72015 100 10.7695 100H23.9113C24.9606 100 25.8316 99.189 25.9062 98.1423L28.6264 60H29.9403C31.0051 60 31.8832 59.1658 31.9377 58.1024L33.6248 25.2049C33.742 22.9183 31.9196 21 29.63 21H4.15991Z',
                },
              ]}
            /> */}
            <p>남자</p>
          </div>
        </Gender>
        <Academic>
          <h3>학력</h3>
          <div style={{ position: 'absolute', width: '100%', top: '0', left: '12px' }}>
            {/* <HorizontalBarChart
              xComplement='%'
              barWidth={5}
              yComplement='%'
              data={[
                {
                  label: '고졸',
                  result: 0,
                  style: { color: '#4357AC' },
                  itemId: '50대',
                },
                {
                  label: '대졸',
                  result: 10,
                  style: { color: '#4357AC' },
                  itemId: 'b',
                },
                {
                  label: '석사',
                  result: 40,
                  style: { color: '#4357AC' },
                  itemId: 'c',
                },
                {
                  label: '박사',
                  result: 50,
                  style: { color: '#4357AC' },
                  itemId: 'c',
                },
              ]}
            /> */}
          </div>
        </Academic>
      </Type>
    </Applicants>
  );
};

const Applicants = styled.div`
  display: flex;
  gap: 13px;
  margin-bottom: 50px;
`;

const Total = styled.div`
  width: 21%;
  height: 280px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 13px;
  div {
    height: 50%;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: var(--color-yellow);
    padding: 30px 30px 20px;
    display: flex;
    flex-flow: column;
    box-shadow: 0px 0px 20px 0px rgba(67, 87, 172, 0.19);
    :last-child {
      background-color: var(--color-primary-100);
    }
    p {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
    h2 {
      font-size: 16px;
      color: #fff;
      text-align: right;
      margin-top: auto;
      span {
        font-size: 30px;
        font-weight: bold;
        margin-right: 3px;
      }
    }
  }
`;

const Type = styled.div`
  width: 79%;
  height: 280px;
  box-shadow: 0px 0px 20px 0px rgba(67, 87, 172, 0.19);
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  padding: 25px;
  h3 {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    position: absolute;
    left: 12px;
    top: 30px;
  }
`;

const Age = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  position: relative;
  div {
    height: 270px !important;
  }
  :after {
    content: '';
    width: 2px;
    height: 220px;
    background-color: var(--color-gray-300);
    position: absolute;
    right: 0;
    top: 5px;
  }
`;

const Academic = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  position: relative;
  div {
    height: 270px !important;
  }
  h3 {
    left: 37px;
  }
  :after {
    content: '';
    width: 2px;
    height: 220px;
    background-color: var(--color-gray-300);
    position: absolute;
    left: 0;
    top: 5px;
  }
`;

const Gender = styled.div`
  display: flex;
  align-items: center;
  width: 33.3%;
  position: relative;
  padding-top: 20px;
  justify-content: center;
  h3 {
    left: 37px;
  }
  p {
    position: absolute;
    bottom: 22px;
  }
`;

export default ApplicantsStats;
