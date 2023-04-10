import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { applicantSettingSchema } from '@/utils/validationSchema';
import DropDown from '@/components/common/DropDown';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { showLoading, hideLoading } from '@/store/loadingSlice';
import { useAppSelector } from '@/hooks/useDispatchHooks';
import { applicantSignUpData } from '@/constants/signupInput';
import { applicantSetting } from '@/api/applicantApi';
import AlertModal from '@/components/common/AlertModal';

const Info = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, setValue } = useForm<ApplicantSettingData>({
    resolver: yupResolver(applicantSettingSchema),
    mode: 'onChange',
  });
  const onValid = async (data: ApplicantSettingData) => {
    const { applicantPassword, applicantName, applicantBirthDate, applicantContact } = data;

    const [applicantGender, applicantEducation, applicantWorkExperience, applicantSector] = [
      applicantSignUpData['applicantGender'][data.applicantGender],
      applicantSignUpData['applicantEducation'][data.applicantEducation],
      applicantSignUpData['applicantWorkExperience'][data.applicantWorkExperience],
      applicantSignUpData['applicantSector'][data.applicantSector],
    ];
    console.log(data);
    try {
      dispatch(showLoading());
      const res = await applicantSetting({
        applicantPassword,
        applicantName,
        applicantBirthDate,
        applicantGender,
        applicantContact,
        applicantEducation,
        applicantWorkExperience,
        applicantSector,
      });
      if (res.stateCode === 200) {
        AlertModal({
          message: '정보 수정이 완료됐습니다.',
        });
      }
    } catch (error) {
      AlertModal({
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [
    userApplicantName,
    userApplicantBirthDate,
    userApplicantGender,
    userApplicantContact,
    userApplicantEducation,
    userApplicantWorkExperience,
    userApplicantSector,
  ] = useAppSelector(state => {
    const user = state.applicantUser;
    return [
      user.applicantName,
      user.applicantBirthDate,
      user.applicantGender,
      user.applicantContact,
      user.applicantEducation,
      user.applicantWorkExperience,
      user.applicantSector,
    ];
  });

  return (
    <Wrapper>
      <Form
        onSubmit={handleSubmit((data: any) => {
          console.log(data);
          onValid(data);
        })}
      >
        <div className='inputBox'>
          <label>기본정보</label>
          <input
            id='applicantName'
            type='text'
            placeholder='이름'
            defaultValue={userApplicantName}
            {...register('applicantName')}
          />
          <Error>{formState.errors.applicantName?.message}</Error>
          <input
            id='applicantBirthDate'
            type='text'
            placeholder='생년월일'
            defaultValue={userApplicantBirthDate}
            {...register('applicantBirthDate')}
          />
          <Error>{formState.errors.applicantBirthDate?.message}</Error>
        </div>
        <div className='inputBox'>
          <label>성별/포지션</label>
          <DropDown
            width='400px'
            title='applicantGender'
            selections={['남자', '여자']}
            register={register}
            setValue={setValue}
            value={userApplicantGender + '자'}
          />
          <Error>{formState.errors.applicantGender?.message}</Error>
          <DropDown
            width='400px'
            title='applicantSector'
            selections={['의사', '간호사', '간호조무사', '의료기사', '의료행정']}
            register={register}
            setValue={setValue}
            value={userApplicantSector}
          />
          <Error>{formState.errors.applicantSector?.message}</Error>
        </div>
        <div className='inputBox'>
          <label>학력/경력</label>
          <DropDown
            width='400px'
            title='applicantEducation'
            selections={['고졸', '초대졸', '대졸', '석박사']}
            register={register}
            setValue={setValue}
            value={userApplicantEducation}
          />
          <Error>{formState.errors.applicantEducation?.message}</Error>
          <DropDown
            width='400px'
            title='applicantWorkExperience'
            selections={['신입', '1년차', '2년차', '3년차', '4년차', '5년차', '5년이상']}
            register={register}
            setValue={setValue}
            value={userApplicantWorkExperience}
          />
          <Error>{formState.errors.applicantWorkExperience?.message}</Error>
        </div>
        <div className='inputBox'>
          <label htmlFor='applicantContact'>휴대폰번호</label>
          <Error>{formState.errors.applicantContact?.message}</Error>
          <input
            id='applicantContact'
            type='tel'
            defaultValue={userApplicantContact}
            {...register('applicantContact')}
            placeholder='010-1234-5678'
          />
        </div>
        <div className='inputBox '>
          <label htmlFor='applicantPassword'>비밀번호</label>
          <Error>{formState.errors.applicantPassword?.message}</Error>
          <input
            type={showPassword ? 'string' : 'password'}
            id='applicantPassword'
            placeholder='영문, 숫자 조합 8~15자리'
            {...register('applicantPassword')}
          />
          {showPassword ? (
            <img src='/icons/close-eye.png' alt='' onClick={() => setShowPassword(false)} className='eye' />
          ) : (
            <img src='/icons/open-eye.png' alt='비밀번호보기' onClick={() => setShowPassword(true)} className='eye' />
          )}
        </div>
        <SubmitButton type='submit'>수정완료</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 40px 0 70px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  padding: 60px 80px;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  .inputBox.password {
    margin-top: -18px;
  }
  .inputBox {
    display: flex;
    gap: 10px;
    width: 100%;
    position: relative;
    align-items: center;
    label {
      width: 100px;
      min-width: 100px;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    input {
      display: block;
      height: 30px;
      border-radius: 30px;
      border: 1px solid #374151;
      width: 100%;
      padding: 10px 30px;
      font-size: 15px;
      &::placeholder {
        color: rgba(37, 37, 37, 0.5);
        font-weight: bold;
      }
    }
    input#zoneCode {
      max-width: 280px;
    }
    img {
      position: absolute;
      right: 48%;
      top: 42%;
      width: 16px;
      height: 10px;
      &:nth-child(n + 5) {
        left: 95%;
      }
      &.eye {
        right: 30px;
        top: 12px;
        width: 28px;
        height: 28px;
      }
    }
    button {
      background: #8294cd;
      border-radius: 20px;
      padding: 7px 15px 4px;
      height: 30px;
      font-weight: bold;
      font-size: 13px;
      line-height: 24px;
      color: white;
      min-width: 110px;
    }
    ul {
      position: absolute;
      top: 60px;
      left: 110px;
      border: 1px solid gray;
      border-radius: 30px;
      overflow: hidden;
      width: 30%;
      height: fit-content;
      z-index: 2;
      &:nth-child(n + 5) {
        left: 56.5%;
      }
      li {
        left: 0;
        width: 100%;
        height: 40px;
        padding: 10px 30px;
        box-sizing: border-box;
        background-color: white;
        font-size: 13px;
        display: flex;
        padding-left: 35px;
        justify-content: flex-start;
        align-items: center;
        &:hover {
          background-color: var(--color-light-gray);
        }
      }
    }
  }
`;

const Error = styled.div`
  position: absolute;
  bottom: -15px;
  left: 140px;
  font-size: 10px;
  color: var(--color-red);
  &:last-child {
    left: 60%;
  }
`;

export const SubmitButton = styled.button`
  margin: 15px 0 0 auto;
  width: 140px;
  height: 40px;
  font-size: 16px;
  border-radius: 20px;
  background-color: var(--color-primary-100);
  color: rgb(255, 255, 255);
  font-weight: bold;
`;

export default Info;
