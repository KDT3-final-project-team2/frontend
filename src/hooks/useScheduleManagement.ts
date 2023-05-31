import { deleteSchedule, editSchedule, getSchedule, postSchedule } from '@/api/commonApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useScheduleManagement = () => {
  const { data: schedule } = useQuery(['schedule'], getSchedule);

  const queryClient = useQueryClient();

  const { mutate: schedulePostMutate } = useMutation(postSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedule']);
    },
  });

  const { mutate: scheduleDeleteMutate } = useMutation(deleteSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedule']);
    },
  });

  const { mutate: schedulePutMutate } = useMutation(editSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedule']);
    },
  });

  return { schedule, schedulePostMutate, scheduleDeleteMutate, schedulePutMutate };
};

export default useScheduleManagement;
