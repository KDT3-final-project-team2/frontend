import { useInfiniteQuery } from '@tanstack/react-query';
import { getJobPostsList, getJobPostsSearch } from '@/api/applicantApi';

export const useJobPosts = (type: string, keyword: string | null) => {
  const fetchJobPosts = async ({ pageParam = 0 }) => {
    if (type !== '전체' && keyword) {
      return getJobPostsSearch(type, keyword, pageParam);
    } else if (type === '전체') {
      return getJobPostsList(pageParam);
    }
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    type === '전체' ? ['jobPostsList'] : ['jobPostsList', type, keyword],
    fetchJobPosts,
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.last) {
          return allPages.length;
        }
        return undefined;
      },
    },
  );

  return {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
