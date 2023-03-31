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
import { ITermDataProps } from '@/@types/props';

const TermPostEditModal = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const { register, handleSubmit, setValue, trigger, formState } = useForm<ITermDataProps>({
    resolver: yupResolver(termPostSchema),
    mode: 'onChange',
  });

  const onChangeContents = (value: string) => {
    setValue('contents', value === '<p><br><p>' ? '' : value);
    trigger('contents');
    console.log(value);
  };

  const onClickSubmit = (data: ITermDataProps) => {
    console.log(data);
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <HeaderTitle>약관 관리 작성</HeaderTitle>
          <Close src='/icons/close.png' />
        </ModalHeader>
        <ModalContentsBox>
          <form onSubmit={handleSubmit(onClickSubmit)}>
            <PostingTitleBox>
              <Label>버전</Label>
              <VersionInput placeholder='1.0' {...register('version')} />
              <ErrorMessage>{formState.errors.version?.message}</ErrorMessage>
            </PostingTitleBox>
            <SelectBox value={selectedOption} onChange={handleOptionChange}>
              {termsOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectBox>
            <Editor>
              <StyledReactQuill theme='snow' onChange={onChangeContents} />
              <ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
            </Editor>
            <SaveBtn>저장</SaveBtn>
          </form>
        </ModalContentsBox>
        {/* <div
          dangerouslySetInnerHTML={{
            __html: '<p><strong>ㅇㅇㅇㅇㅇ</strong></p><p><br></p><ol><li>안녕</li></ol><h1>안녕하세용</h1>',
          }}
        ></div> */}
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
`;

const ErrorMessage = styled.p`
  color: #e95656;
  margin-left: 10px;
`;
