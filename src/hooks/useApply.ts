import { applicantApply } from '@/api/applicantApi';
import ConfirmModal from '@/components/common/ConfirmModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useApply = (searchData: JobPostsSearchData): [() => void] => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: applyMutate } = useMutation(applicantApply, {
    onSuccess: res => {
      if (res.stateCode === 403) {
        ConfirmModal({
          message: '이력서가 없습니다. 이력서 등록 페이지로 이동하시겠습니까?',
          action: () => navigate('/applicant/resume'),
        });
      }
      queryClient.invalidateQueries(['myApplications']);
    },
  });

  const apply = () => {
    ConfirmModal({
      message: '지원하시겠습니까?',
      action: () => {
        applyMutate({
          jobpostId: searchData?.jobpostId,
        });
      },
    });
  };

  return [apply];
};

export default useApply;
