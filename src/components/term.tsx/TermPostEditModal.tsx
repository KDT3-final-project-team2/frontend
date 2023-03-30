import styled from 'styled-components';
import {
  Close,
  Label,
  ModalBackground,
  ModalContainer,
  ModalHeader,
  PostingTitleBox,
} from '../companyjobposting/PostEditModal';
import close from '../../assets/icons/close.png';
import { ModalContentsBox } from './../companyjobposting/PostEditModal';
import { useState, ChangeEvent } from 'react';
import { termsOptions } from '../../constants/termsOptions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { RegistrationButton } from '../../pages/company/CompanyJobPosting';

const TermPostEditModal = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: 'onChange',
  });

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue('contents', value === '<p><br><p>' ? '' : value);
    trigger('contents');
  };

  const onClickSubmit = () => {};

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <HeaderTitle>약관 관리 작성</HeaderTitle>
          <Close src={close} />
        </ModalHeader>
        <ModalContentsBox>
          <form onSubmit={handleSubmit(onClickSubmit)}>
            <PostingTitleBox>
              <Label>버전</Label>
              <VersionInput {...register('versioln')} />
            </PostingTitleBox>
            <SelectBox value={selectedOption} onChange={handleOptionChange}>
              {termsOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectBox>
            <StyledReactQuill theme='snow' onChange={onChangeContents} />
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
  margin-top: 11px;
  color: #374151;
  .ql-container {
    border: none;
  }
  .ql-toolbar.ql-snow {
    border: 1px solid #e2efff;
    border-radius: 10px 10px 0px 0px;
    height: 46px;
    display: flex;
    align-items: center;
    gap: 10px;
    .ql-formats {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .ql-formats:not(:last-child)::after {
      content: '';
      height: 26px;
      width: 1px;
      background: #d2d5da;
      border-radius: 0.5px;
    }
    .ql-picker-options {
      box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
      border-radius: 10px;
      padding: 5px;
    }
  }
  .ql-editor {
    background-color: #e2efff;
    border-radius: 0 0 10px 10px;
    border: 1px solid #e2efff;
    padding: 33px;
  }
`;

const SaveBtn = styled(RegistrationButton)`
  margin-right: 0px;
`;
