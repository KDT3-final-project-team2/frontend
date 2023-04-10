import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import { TabContainer, FilterBox, Inner, NoList } from './ApplicantsInfo';
import SelectBox from '../common/SelectBox';
import ApplicantsList from './ApplicantsList';
import AlertModal from '../common/AlertModal';

export const res = [
  {
    name: '문동은',
    education: '대졸',
    workExperience: '1년차',
    sector: '의사',
    applicationStatus: '면접미정',
    memo: '안녕 히히!',
    applicant_file_path: '/path/to/resume4.pdf',
  },
  {
    name: '박연진',
    education: '고졸',
    workExperience: '2년차',
    sector: '간호조무사',
    applicationStatus: '면접미정',
    memo: '헬로 히히!',
    applicant_file_path: '/path/to/resume4.pdf',
  },
];

const ApplicantsRecommend = () => {
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
      //const res = await getApplicantAll();
      setInfo(res);
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

export default ApplicantsRecommend;
