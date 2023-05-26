import {
  deleteJobPost,
  getCompanyJobpostSingle,
  getCompanyJobposts,
  postJobPosts,
  putJobPosts,
} from '@/api/companyApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useJobPostManagement = (id?: number): any => {
  const { data } = useQuery(['jobPosts'], getCompanyJobposts);

  const { data: jobPostSingle } = useQuery(
    ['jobPostSingle', id],
    () => {
      if (id) return getCompanyJobpostSingle(id);
    },
    {
      enabled: !!id,
    },
  );

  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteJobPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobPosts']);
    },
  });

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

  return { data, mutate, jobPostSingle, jobPostMutate, jobPutMutate };
};

export default useJobPostManagement;
