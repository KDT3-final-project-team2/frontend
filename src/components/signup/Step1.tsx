import { IStep1Props } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';
import { termNames } from '../../constants/terms';
import CheckBox from './CheckBox';
import { useQuery } from '@tanstack/react-query';
import { getTerms } from '@/api/commonApi';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { hideLoading, showLoading } from '@/store/loadingSlice';

const Step1 = ({ onClickNext, onClickBack, member, step, checkedItems, setCheckedItems }: IStep1Props) => {
  const dispatch = useAppDispatch();
  const handleAllChecks = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      const tempArray: string[] = [];
      termNames.map(termName => tempArray.push(termName));
      setCheckedItems(tempArray);
    } else {
      setCheckedItems([]);
    }
  };

  const { data: terms, isLoading } = useQuery(['terms'], getTerms);
  // console.log(terms, isLoading);
  if (isLoading) {
    dispatch(showLoading());
    return null;
  } else {
    dispatch(hideLoading());
    return (
      <>
        <SignUpTitle member={member} />
        <MainContainer>
          <StepCheck step={step} />
          <TermsContainer>
            <header>
              <div>
                <input
                  type='checkbox'
                  checked={checkedItems.length === termNames.length ? true : false}
                  onChange={handleAllChecks}
                  id={'이용약관 전체 동의하기'}
                />
                <label htmlFor='이용약관 전체 동의하기'>
                  <img src='/icons/check.png' alt='체크' className='check' />
                  <div>이용약관 전체 동의하기</div>
                </label>
              </div>
            </header>
            <main>
              <ul>
                {termNames.map((termName, index) => (
                  <CheckBox
                    key={termName}
                    title={termName}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                    index={index}
                  />
                ))}
              </ul>
            </main>
          </TermsContainer>
          <SignUpPaginationButton onClickNext={onClickNext} onClickBack={onClickBack} step={step} />
        </MainContainer>
      </>
    );
  }
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

const TermsContainer = styled.div`
  margin: auto;
  min-height: 532px;
  height: fit-content;
  width: 840px;
  border: 1px solid black;
  border-radius: 20px;

  header {
    padding-left: 35px;
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid black;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    div {
      display: flex;
      align-items: center;
      gap: 14px;
    }
  }
  main {
    padding: 30px 55px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-left: li {
        margin-left: 20px;
        display: flex;
        align-items: center;
        gap: 14px;
      }
    }
  }
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: none;
    position: relative;
    padding-left: 25px;
    img.check {
      width: 17px;
      height: 17px;
      padding: 4px;
      box-sizing: border-box;
      border-radius: 100%;
      background-color: var(--color-primary-050);
      position: absolute;
      left: 0;
      top: 5%;
    }
  }
  input[type='checkbox']:checked + label {
    img.check {
      background-color: var(--color-primary-100);
    }
  }
`;

export default Step1;
