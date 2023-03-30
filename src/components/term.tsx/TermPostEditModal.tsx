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
import { useState, ChangeEvent, React } from 'react';
import { termsOptions } from '../../constants/termsOptions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

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

  const onClickSubmit = data => {};

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
          <PostingTitleBox>
            <Label>버전</Label>
            <VersionInput {...register('versioln')} />
          </PostingTitleBox>
          <form onSubmit={handleSubmit(onClickSubmit)}>
            <SelectBox value={selectedOption} onChange={handleOptionChange}>
              {termsOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectBox>
            <StyledReactQuill theme='snow' onChange={onChangeContents} />
          </form>
        </ModalContentsBox>
        <div
          dangerouslySetInnerHTML={{
            __html: '<p><strong>ㅇㅇㅇㅇㅇ</strong></p><p><br></p><ol><li>안녕</li></ol><h1>안녕하세용</h1>',
          }}
        ></div>
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
  font-size: 14px;
  color: #111827;
  font-weight: 500;
`;

const StyledReactQuill = styled(ReactQuill)``;
