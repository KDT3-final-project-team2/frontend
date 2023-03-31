import { IStep1Props } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';
import { terms } from '../../constants/terms';
import CheckBox from './CheckBox';

const Step1 = ({ onClickNext, onClickBack, member, step, checkedItems, setCheckedItems }: IStep1Props) => {
  const handleAllChecks = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      const tempArray: string[] = [];
      terms.map(value => tempArray.push(value));
      setCheckedItems(tempArray);
    } else {
      setCheckedItems([]);
    }
  };

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
                checked={checkedItems.length === terms.length ? true : false}
                onChange={handleAllChecks}
                id={'이용약관 전체 동의하기'}
              />
              <label htmlFor='이용약관 전체 동의하기'>
                <img src='/icons/check.png' alt='체크' />
              </label>
              <div>이용약관 전체 동의하기</div>
            </div>
          </header>
          <main>
            <ul>
              {terms.map((term, index) => (
                <CheckBox
                  key={term}
                  title={term}
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
    display: inline-block;
    width: 17px;
    height: 17px;
    border: none;
    background-color: var(--color-primary-050);
    border-radius: 100%;
    position: relative;
    img {
      position: absolute;
      left: 17.65%;
      right: 17.65%;
      top: 25.86%;
      bottom: 25.86%;
    }
  }
  input[type='checkbox']:checked + label {
    background-color: var(--color-primary-100);
    img {
      position: absolute;
      left: 17.65%;
      right: 17.65%;
      top: 25.86%;
      bottom: 25.86%;
    }
  }
`;

export default Step1;
