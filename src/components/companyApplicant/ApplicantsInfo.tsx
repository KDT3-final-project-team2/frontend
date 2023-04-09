import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import SelectBox from '../common/SelectBox';
import ApplicantsList from './ApplicantsList';

export const res = [
  {
    applicant_id: 1,
    applicant_name: '문동은',
    applicant_contact: '555-1111',
    applicant_education: '대졸',
    applicant_work_experience: '1년차',
    applicant_sector: '의사',
    applicant_state: '면접미정',
    applicant_memo: '패기가 넘침',
    applicant_file_path: '/path/to/resume4.pdf',
  },
  {
    applicant_id: 2,
    applicant_name: '박연진',
    applicant_contact: '555-1111',
    applicant_education: '고졸',
    applicant_work_experience: '신입',
    applicant_sector: '간호사',
    applicant_state: '면접통과',
    applicant_memo: '인성이 의심됨',
    applicant_file_path: '/path/to/resume4.pdf',
  },
];

const ApplicantsInfo = () => {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState({});

  // 셀렉트 정렬
  const [jopOption] = useState([{ value: '직업전체' }, { value: '간호사' }, { value: '의사' }]);
  const [jop, setJop] = useState(jopOption[0].value);

  const [careerOption] = useState([{ value: '경력전체' }, { value: '신입' }, { value: '1년차' }]);
  const [career, setCareer] = useState(careerOption[0].value);

  const getApplicantsIfo = async () => {
    try {
      dispatch(showLoading());
      setInfo(res);
    } catch (error) {
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
