import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import { TabContainer, Inner, NoList, res } from './ApplicantsInfo';
import SelectBox from '../common/SelectBox';

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
        <ul>
          {Array.isArray(info) ? (
            info.map((item: any, idx: number) => {
              return (
                <li key={idx}>
                  <Avvvatars value={item.applicant_name} style='character' size={32} />
                  <p className='name'>{item.applicant_name}</p>
                  <div>
                    <span>{item.applicant_sector}</span>
                    <span>{item.applicant_work_experience}</span>
                    <span>{item.applicant_education}</span>
                  </div>
                  <div>
                    <button>
                      <img src='/public/icon/mail.svg' alt='메일' width='20px' height='16px' />
                    </button>
                    <button>
                      <img src='/public/icon/bookmark.svg' alt='북마크' width='14px' height='18px' />
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <NoList>아직 지원한 지원자가 없습니다.</NoList>
          )}
        </ul>
      </Inner>
    </TabContainer>
  );
};

const FilterBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;

export default ApplicantsRecommend;
