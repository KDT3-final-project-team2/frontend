import { IPostingContensProps } from '@/@types/props';
import { Contents, ContentsBox, ContentsTitle } from './PreviewModal';

const PostingContents = ({ title, contents }: IPostingContensProps) => {
  return (
    <ContentsBox>
      <ContentsTitle>{title}</ContentsTitle>
      <Contents>{contents}</Contents>
    </ContentsBox>
  );
};

export default PostingContents;
