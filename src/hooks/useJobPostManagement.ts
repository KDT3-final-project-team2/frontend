import { deleteJobPost, getCompanyJobposts } from '@/api/companyApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useJobPostManagement = () => {
  const { data } = useQuery(['jobPosts'], getCompanyJobposts);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteJobPost, {
      onSuccess: () => {
      queryClient.invalidateQueries(['jobPosts']);
      },
  });
  
  return {data, mutate}
}

export default useJobPostManagement