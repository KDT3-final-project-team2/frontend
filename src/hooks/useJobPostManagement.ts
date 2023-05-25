import { deleteJobPost, getCompanyJobpostSingle, getCompanyJobposts } from '@/api/companyApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useJobPostManagement = () => {
  const { data } = useQuery(['jobPosts'], getCompanyJobposts);

  const getjobPostSingle = (id: number) => {
    const { data: jobPostSingle } = useQuery(['jobPostSingle', id], () => getCompanyJobpostSingle(id), {
      enabled: !!id,
    });
    return jobPostSingle;
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteJobPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobPosts']);
    },
  });

  return { data, mutate, getjobPostSingle };
};

export default useJobPostManagement;
