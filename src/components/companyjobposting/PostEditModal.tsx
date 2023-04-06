import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { IModalProps } from '../../@types/props';
import { jobPostSchema } from '../../utils/validationSchema';
import { educationOptions, sectorOptions, workExperiencerOptions } from '@/constants/jobPostingOptions';
import { InputBox } from './InputBox';
import { SelectBox } from './SelectBox';

const PostEditModal = ({ setIsModalOpen, setIsEditModal, isEditModal }: IModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState, setValue, trigger } = useForm<IPostingInput>({
    resolver: yupResolver(jobPostSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    // get, put /company/jobposts/{jobpostId}
  }, [isEditModal]);

  const onSubmitPosting = (data: IPostingInput) => {
    console.log('채용공고등록', data);

    // const formData = new FormData();
    // formData.append('jobpostTitle', title);
    // formData.append('jobpostSector', sector);
    // formData.append('jobpostWorkExperience', experience);
    // formData.append('jobpostEducation', education);
    // formData.append('jobpostMaxApplicants', maxapplicants);
    // formData.append('jobpostDueDate', duedate);
    // formData.append('jobpostFile', file);
    // try {
    //   const response = await axios.post('/company/jobposts', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onClickFile = () => {
    fileRef.current?.click();
  };

  const onClickModalClose = () => {
    setIsEditModal(false);
    setIsModalOpen(false);
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0]);
    setValue('file', event.target.files?.[0]);
    console.log(event.target.files?.[0]);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <HeaderTitle>채용 공고</HeaderTitle>
          <Close src='/icons/close.png' onClick={onClickModalClose} />
        </ModalHeader>
        <ModalContentsBox>
          <form onSubmit={handleSubmit(onSubmitPosting)}>
            <InputBox
              label='공고명'
              id='title'
              register={register}
              placeholder='2023년도 정규직 간호사 채용 공고'
              formState={formState}
            >
              <PostingButton>{isEditModal ? '수정완료' : '등록하기'}</PostingButton>
            </InputBox>
            <QualificationsBox>
              <QualificationsTitle>모집분야 및 지원자격</QualificationsTitle>
              <SelectBox label='직종' options={sectorOptions} setValue={setValue} trigger={trigger} property='sector' />
              <SelectBox
                label='경력'
                options={workExperiencerOptions}
                setValue={setValue}
                trigger={trigger}
                property='experience'
              />
              <SelectBox
                label='학력'
                options={educationOptions}
                setValue={setValue}
                trigger={trigger}
                property='education'
              />
            </QualificationsBox>
            <InputBox label='모집인원' id='maxapplicants' register={register} placeholder='4' formState={formState} />
            <PostingTitleBox>
              <Label htmlFor='startData'>모집시작일</Label>
              <DatePickerInput id='startDate' type='datetime-local' {...register('startDate')} />
              <ErrorMessage>{formState.errors.startDate?.message}</ErrorMessage>
            </PostingTitleBox>
            <PostingTitleBox>
              <Label htmlFor='duedate'>마감일</Label>
              <DatePickerInput id='duedate' type='date' {...register('duedate')} />
              <ErrorMessage>{formState.errors.duedate?.message}</ErrorMessage>
            </PostingTitleBox>
            <PostingTitleBox>
              <Label htmlFor='file'>공고 PDF</Label>
              <InputFile
                id='file'
                type='file'
                {...register('file')}
                ref={fileRef}
                onChange={handleFileSelect}
                accept='.pdf'
              />
              <FileTitleBox>
                <p>{selectedFile ? `선택된 파일 : ${selectedFile?.name}` : '파일을 선택해주세요.'}</p>
              </FileTitleBox>
              <SelectFile src='/icons/selectfile.png' onClick={onClickFile} />
              <ErrorMessage>{formState.errors.file?.message}</ErrorMessage>
            </PostingTitleBox>
          </form>
        </ModalContentsBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default PostEditModal;

export const ModalBackground = styled.section`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000006b;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ModalContainer = styled.div`
  width: 1056px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
  border-radius: 19px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 63px;
  padding: 0 44px;
  border-bottom: 1px solid #ececec;
`;

export const ModalContentsBox = styled.div`
  padding: 40px 72px;
`;

export const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const PostingTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

export const Label = styled.label`
  width: 90px;
  font-weight: 700;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 360px;
  height: 30px;
  border: 1px solid #7b7b7b;
  border-radius: 20px;
  background: #ffffff;
  padding-top: 2px;
`;

const DatePickerInput = styled(Input)`
  padding-right: 10px;
`;

const InputFile = styled(Input)`
  display: none;
`;

const PostingButton = styled.button`
  height: 40px;
  width: 140px;
  background: var(--color-blue);
  border-radius: 20px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  position: absolute;
  right: -20px;
`;

const QualificationsBox = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
`;

export const QualificationsTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: var(--color-blue);
  margin-bottom: 32px;
`;

const FileTitleBox = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const SelectFile = styled.img`
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: #e95656;
  margin-left: 10px;
`;

export const Close = styled(SelectFile)``;
