import { MainContainer, RecruitmentNotice, RegistrationButton } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import TermList from '../../components/term.tsx/TermList';
import TermPostEditModal from '../../components/term.tsx/TermPostEditModal';
import { MouseEvent, useState } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';

export const AdminTerm = () => {
  const [termModalOpen, setTermModalOpen] = useState(false);
  const [saveBtnText, setSaveBtnText] = useState('저장');

  const onClickTermPost = () => {
    setTermModalOpen(true);
    setSaveBtnText('저장');
  };

  const onClickTermEdit = (event: MouseEvent<HTMLImageElement>) => {
    event?.stopPropagation();
    setTermModalOpen(true);
    setSaveBtnText('수정완료');
  };

  const postCartItem = async () => {
    const res = await axios.post(
      'http://13.124.119.131:3100/admin/term',
      {
        content: '테스트',
        type: 'PRIVACY',
        version: '4',
        status: 'USE',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(res.data);
  };

  const queryClient = useQueryClient();

  // const { isLoading, error, data } = useQuery('repoData', () =>
  //   fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => res.json()),
  // );

  // if (isLoading) return 'Loading...';

  // if (error) return 'An error has occurred: ' + error.message;

  const getTodos = () => {
    axios.get('/api/todos').then(res => res.data);
  };

  const postTodo = todo => {
    axios.post('/api/todos', { todo }).then(res => res.data);
  };

  const query = useQuery('todos', getTodos);
  const mutation = useMutation(postTodo, () => {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    };
  });

  return (
    <MainContainer>
      <button
        onClick={() => {
          postCartItem();
        }}
      >
        약관생성
      </button>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Lean Reacy Query',
          });
        }}
      >
        Add todo
      </button>
      <div className='headerBox'>
        <RecruitmentNotice>약관 관리</RecruitmentNotice>
        <ViewTerms>약관 조회</ViewTerms>
        <RegistrationButton onClick={onClickTermPost}>작성하기</RegistrationButton>
      </div>
      {[1, 2, 3].map((data, index) => (
        <TermList key={data} index={index} setTermModalOpen={setTermModalOpen} onClickTermEdit={onClickTermEdit} />
      ))}
      {termModalOpen && <TermPostEditModal setTermModalOpen={setTermModalOpen} saveBtnText={saveBtnText} />}
    </MainContainer>
  );
};

export default AdminTerm;

const ViewTerms = styled.h2`
  padding: 0 15px 15px 15px;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary-100);
  margin-top: 50px;
  width: 100px;
  border-bottom: 5px solid;
`;
