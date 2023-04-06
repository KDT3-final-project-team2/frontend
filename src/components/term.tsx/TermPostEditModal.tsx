import styled from 'styled-components';
import {
  Close,
  Label,
  ModalBackground,
  ModalContainer,
  ModalHeader,
  PostingTitleBox,
} from '../companyjobposting/PostEditModal';
import { ModalContentsBox } from './../companyjobposting/PostEditModal';
import { useState, ChangeEvent } from 'react';
import { termsOptions } from '../../constants/termsOptions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { RegistrationButton } from '../../pages/company/CompanyJobPosting';
import { Editor } from '../common/WebEditor';
import { yupResolver } from '@hookform/resolvers/yup';
import { termPostSchema } from '@/utils/validationSchema';
import { ITermDataProps, ITermPostEditModalProps } from '@/@types/props';
import { usePostAdminTerm, useUpdateAdminTerm } from '@/api/adminApi';

const TermPostEditModal = ({
  setTermModalOpen,
  saveBtnText,
  setEditModalOpen,
  defaultData,
}: ITermPostEditModalProps) => {
  const { register, handleSubmit, setValue, trigger, formState } = useForm<ITermDataProps>({
    resolver: yupResolver(termPostSchema),
    mode: 'onChange',
    defaultValues: {
      version: defaultData?.version,
      selectedOption: defaultData?.type,
      contents: defaultData?.content,
    },
  });

  const postAdminTerm = usePostAdminTerm();
  const updateAdminTerm = useUpdateAdminTerm();

  const onChangeContents = (value: string) => {
    setValue('contents', value === '<p><br><p>' ? '' : value);
    trigger('contents');
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue('selectedOption', event.target.value);
    trigger('selectedOption');
  };

  const onClickSubmit = (data: ITermDataProps) => {
    console.log('저장', data);
    if (saveBtnText === '저장') {
      postAdminTerm({
        termId: Math.random() * 10, // 삭제
        type: data.selectedOption,
        version: data.version,
        createDate: '2023-12-25', // 삭제
        editDate: '2023-12-25', // 삭제
        status: 'USE',
        content: data.contents,
      });
    }
    if (saveBtnText === '수정완료' && defaultData) {
      console.log('수정', data);
      updateAdminTerm({
        termId: defaultData.termId,
        data: {
          type: data.selectedOption,
          version: data.version,
          status: 'USE',
          content: data.contents,
        },
      });
    }
    setTermModalOpen(false);
    if (setEditModalOpen) {
      setEditModalOpen(false);
    }
  };

  const onClickCloseModal = () => {
    setTermModalOpen(false);
    if (setEditModalOpen) {
      setEditModalOpen(false);
    }
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <HeaderTitle>약관 관리 작성</HeaderTitle>
          <Close src='/icons/close.png' onClick={onClickCloseModal} />
        </ModalHeader>
        <ModalContentsBox>
          <form onSubmit={handleSubmit(onClickSubmit)}>
            <PostingTitleBox>
              <Label>버전</Label>
              <VersionInput placeholder='1.0' {...register('version')} defaultValue={defaultData?.version} />
              <ErrorMessage>{formState.errors.version?.message}</ErrorMessage>
            </PostingTitleBox>
            <SelectBox onChange={handleOptionChange} defaultValue={defaultData?.type}>
              <option>선택하세요.</option>
              {termsOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectBox>
            <ErrorMessage>{formState.errors.selectedOption?.message}</ErrorMessage>
            <Editor>
              <StyledReactQuill theme='snow' onChange={onChangeContents} defaultValue={defaultData?.content} />
              <ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
            </Editor>
            <BtnContainer>
              <CloseBtn onClick={onClickCloseModal}>취소</CloseBtn>
              <SaveBtn>{saveBtnText}</SaveBtn>
            </BtnContainer>
          </form>
        </ModalContentsBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default TermPostEditModal;

const HeaderTitle = styled.p`
  color: #6d7280;
  font-size: 16px;
  font-weight: 700;
  padding-top: 5px;
`;

const VersionInput = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid #7b7b7b;
  border-radius: 20px;
  background: #ffffff;
  padding-top: 2px;
`;

const SelectBox = styled.select`
  border: 1px solid #7b7b7b;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #111827;
  font-weight: 500;
`;

const StyledReactQuill = styled(ReactQuill)`
  height: 300px;
  margin: 0px 0 85px;
  .ql-editor strong {
    font-weight: bold;
  }
  .ql-editor em {
    font-style: italic;
  }
  .ql-editor u {
    text-decoration: underline;
  }
`;

const SaveBtn = styled(RegistrationButton)`
  margin-right: 0px;
  margin-left: 0;
`;

const ErrorMessage = styled.p`
  color: #e95656;
  margin-left: 10px;
  margin-top: 0px;
`;

const CloseBtn = styled.button`
  height: 40px;
  width: 140px;
  border-radius: 20px;
  border: 1px solid var(--color-primary-050);
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  color: var(--color-primary-050);
  margin-top: 9px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
`;
