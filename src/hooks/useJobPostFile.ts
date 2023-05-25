import { getCompanyJobPostFile } from '@/api/companyApi';
import { useQuery } from '@tanstack/react-query';

const useJobPostFile = (id: number) => {
  const { data: jobPostFile } = useQuery(['jobPosts', id], () => getCompanyJobPostFile(id), {
    enabled: !!id,
  });

  const onClickPdfOpen = () => {
    return window.open(`${jobPostFile?.data}`);
  };

  return { onClickPdfOpen, jobPostFile };
};

export default useJobPostFile;
