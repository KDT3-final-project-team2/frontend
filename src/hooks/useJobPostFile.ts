import { getCompanyJobPostFile } from '@/api/companyApi';
import { useQuery } from '@tanstack/react-query';

const useJobPostFile = (searchData: JobPostsSearchData) => {
  const { data: jobPostFile } = useQuery(
    ['jobPosts', searchData?.jobpostId],
    () => {
      if (searchData) return getCompanyJobPostFile(searchData.jobpostId);
    },
    {
      enabled: !!searchData?.jobpostId,
    },
  );

  const onClickPdfOpen = () => {
    return window.open(`${jobPostFile?.data}`);
  };

  return onClickPdfOpen;
};

export default useJobPostFile;
