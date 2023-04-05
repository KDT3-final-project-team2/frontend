import axios from 'axios';
import { instance } from './instance';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetAdminTermList = () => {
  const getAdminTermList = async () => {
    try {
      const res = await axios.get('http://localhost:5173/admin/term/list');
      console.log('res', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const { data } = useQuery(['adminTerm'], getAdminTermList);

  return data;
};

// type 변경해주기
export const usePostAdminTerm = () => {
  const queryClient = useQueryClient();
  const postAdminTerm = async (termData: any) => {
    try {
      const res = await axios.post('http://localhost:5173/admin/term', { termData });
      console.log('res', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { mutate } = useMutation(postAdminTerm, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminTerm']);
    },
  });

  return mutate;
};

export const useUpdateAdminTerm = () => {
  const queryClient = useQueryClient();
  const updateAdminTerm = async ({ termId, data }: { termId: number; data: IAdminTermPostData }) => {
    try {
      const res = await axios.put(`http://localhost:5173/admin/term/${termId}`, { data });
      console.log('res', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { mutate } = useMutation(updateAdminTerm, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminTerm']);
    },
  });

  return mutate;
};
