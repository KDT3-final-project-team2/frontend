import { getApplicants } from '@/api/companyApi';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import AlertModal from '../common/AlertModal';
import SelectBox from '../common/SelectBox';
import ApplicantsList from './ApplicantsList';

const ApplicantsInfo = () => {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState({});

  // 셀렉트 정렬
  const [jopOption] = useState([
    { value: '직업전체' },
    { value: '의사' },
    { value: '간호사' },
    { value: '간호조무사' },
    { value: '의료기사' },
    { value: '의료행정' },
  ]);
  const [jop, setJop] = useState(jopOption[0].value);
  ['신입', '1년차', '2년차', '3년차', '4년차', '5년차 이상'];
  const [careerOption] = useState([
    { value: '경력전체' },
    { value: '신입' },
    { value: '1년차' },
    { value: '2년차' },
    { value: '3년차' },
    { value: '4년차' },
    { value: '5년차 이상' },
  ]);
  const [career, setCareer] = useState(careerOption[0].value);

  const getApplicantsIfo = async () => {
    try {
      dispatch(showLoading());
      const res = await getApplicants();
      setInfo(res.data);
    } catch (error) {
      AlertModal({
        message: '조회에 실패했습니다.',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getApplicantsIfo();
  }, []);

  return (
    <TabContainer>
      <FilterBox>
        <SelectBox props={jopOption} valueText={setJop} />
        <SelectBox props={careerOption} valueText={setCareer} />
      </FilterBox>
      <Inner>
        {Array.isArray(info) ? (
          info.map((item: any, idx: number) => {
            return <ApplicantsList item={item} key={idx} />;
          })
        ) : (
          <NoList>아직 지원한 지원자가 없습니다.</NoList>
        )}
      </Inner>
    </TabContainer>
  );
};

export const TabContainer = styled.div``;

export const FilterBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;

export const Inner = styled.div`
  padding: 20px 0 50px;
`;

export const NoList = styled.div`
  background: var(--color-gray-100);
  height: 200px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 3px 0 0;
`;

export default ApplicantsInfo;
