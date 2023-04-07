import axios from 'axios';
import { authInstance, instance } from './instance';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const getAdminTermList = async () => {
  try {
    const res = await fetch('/data/term.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// type 변경해주기
export const usePostAdminTerm = () => {
  const queryClient = useQueryClient();
  const postAdminTerm = async (termData: any) => {
    try {
      const res = await instance.post('/admin/term', { termData });
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
      const res = await instance.put(`/admin/term/${termId}`, { data });
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

// 병원회원 목록 조회하기
export const getCompanyMembers = async () => {
  try {
    const res = await authInstance.get(`/admin/companies`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 지원자회원 목록 조회하기
export const getApplicantMembers = async () => {
  try {
    const res = await authInstance.get(`/admin/applicants`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
