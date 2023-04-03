import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import { TabContainer, FilterBox, Inner, NoList, res } from './ApplicantsInfo';
import SelectBox from '../common/SelectBox';
import ApplicantsList from './ApplicantsList';

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

export default ApplicantsRecommend;
