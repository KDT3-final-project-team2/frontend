import { deleteSchedule, editSchedule, getSchedule, postSchedule } from '@/api/commonApi';
import CalendarUI from '@/components/calendar/CalendarUI';
import UserProfile from '@/components/calendar/UserProfile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Calendar = () => {
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

  return (
    <>
      <UserProfile />
      <CalendarUI
        schedule={schedule?.data}
        schedulePostMutate={schedulePostMutate}
        scheduleDeleteMutate={scheduleDeleteMutate}
        schedulePutMutate={schedulePutMutate}
      />
    </>
  );
};

export default Calendar;
