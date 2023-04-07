import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { IModalProps } from '../../@types/props';
import { jobPostSchema } from '../../utils/validationSchema';
import { educationOptions, sectorOptions, workExperiencerOptions } from '@/constants/jobPostingOptions';
import { InputBox } from './InputBox';
import { SelectBox } from './SelectBox';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCompanyJobpostSingle, postJobPosts, putJobPosts } from '@/api/companyApi';

const PostEditModal = ({ setIsModalOpen, setIsEditModal, jobPosts, saveBtnText }: IModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const fileRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const { mutate: jobPostMutate } = useMutation(postJobPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobPosts']);
    },
  });
  const { mutate: jobPutMutate } = useMutation(putJobPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobPosts']);
    },
  });

  const { data: jobPostSingle } = useQuery(
    ['jobPostSingle', jobPosts?.postId],
    () => {
      if (jobPosts) {
        return getCompanyJobpostSingle(jobPosts.postId);
      }
    },
    {
      enabled: !!jobPosts?.postId,
    },
  );

  const { register, handleSubmit, formState, setValue, trigger } = useForm<IPostingInput>({
    resolver: yupResolver(jobPostSchema),
    mode: 'onChange',
    defaultValues: {
      title: jobPostSingle?.title,
      sector: jobPostSingle?.sector,
      workExperience: jobPostSingle?.workExperience,
      education: jobPostSingle?.education,
      recruitNum: jobPostSingle?.maxApplicants,
      dueDate: jobPostSingle?.dueDate,
      file: jobPostSingle?.file,
      startDate: jobPostSingle?.startDate,
    },
  });

  useEffect(() => {
    setValue('title', jobPostSingle?.title);
    setValue('sector', jobPostSingle?.sector);
    setValue('workExperience', jobPostSingle?.workExperience);
    setValue('education', jobPostSingle?.education);
    setValue('recruitNum', jobPostSingle?.maxApplicants);
    setValue('dueDate', jobPostSingle?.dueDate);
    setValue('file', jobPostSingle?.file);
    setValue('startDate', jobPostSingle?.startDate);
  }, [jobPostSingle, setValue]);

  const onSubmitPosting = (data: IPostingInput) => {
    const postData = Object.fromEntries(Object.entries(data).filter(([key]) => key !== 'file'));
    const formData = new FormData();
    formData.append('requestDTO', JSON.stringify(postData));
    formData.append('jobpostFile', data.file);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    if (saveBtnText === '등록하기') {
      jobPostMutate(formData);
      if (setIsModalOpen) setIsModalOpen(false);
      return;
    }
    if (saveBtnText === '수정완료' && jobPosts) {
      jobPutMutate({
        jobpostId: jobPosts.postId,
        jobPutData: formData,
      });
    }
  };

  const onClickFile = () => {
    fileRef.current?.click();
  };

  const onClickModalClose = () => {
    if (setIsEditModal) setIsEditModal(false);
    if (setIsModalOpen) setIsModalOpen(false);
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0]);
      setValue('file', event.target.files[0]);
      console.log(event.target.files?.[0]);
    }
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
              defaultValue={jobPostSingle?.title}
            >
              <PostingButton>{saveBtnText}</PostingButton>
            </InputBox>
            <QualificationsBox>
              <QualificationsTitle>모집분야 및 지원자격</QualificationsTitle>
              <SelectBox
                label='직종'
                options={sectorOptions}
                setValue={setValue}
                trigger={trigger}
                property='sector'
                defaultValue={jobPostSingle?.sector}
              />
              <SelectBox
                label='경력'
                options={workExperiencerOptions}
                setValue={setValue}
                trigger={trigger}
                property='workExperience'
                defaultValue={jobPostSingle?.workExperience}
              />
              <SelectBox
                label='학력'
                options={educationOptions}
                setValue={setValue}
                trigger={trigger}
                property='education'
                defaultValue={jobPostSingle?.education}
              />
            </QualificationsBox>
            <InputBox
              label='모집인원'
              id='recruitNum'
              register={register}
              placeholder='4'
              formState={formState}
              defaultValue={jobPostSingle?.maxApplicants}
            />
            <PostingTitleBox>
              <Label htmlFor='startData'>모집시작일</Label>
              <DatePickerInput
                id='startDate'
                type='datetime-local'
                {...register('startDate')}
                defaultValue={jobPostSingle?.startDate}
              />
              <ErrorMessage>{formState.errors.startDate?.message}</ErrorMessage>
            </PostingTitleBox>
            <PostingTitleBox>
              <Label htmlFor='dueDate'>마감일</Label>
              <DatePickerInput
                id='dueDate'
                type='datetime-local'
                {...register('dueDate')}
                defaultValue={jobPostSingle?.dueDate}
              />
              <ErrorMessage>{formState.errors.dueDate?.message}</ErrorMessage>
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
                // defaultValue={jobPostSingle?.filePath}
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
