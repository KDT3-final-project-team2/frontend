import { IinputBoxProps } from '@/@types/props';
import { ErrorMessage, Input, Label, PostingTitleBox } from './PostEditModal';

export const InputBox = ({ label, register, placeholder, children, id, formState }: IinputBoxProps) => {
  return (
    <PostingTitleBox>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type='text' {...register(id)} placeholder={placeholder} />
      <ErrorMessage>{formState.errors[id]?.message}</ErrorMessage>
      {children}
    </PostingTitleBox>
  );
};
