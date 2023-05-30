import CalendarUI from '@/components/calendar/CalendarUI';
import UserProfile from '@/components/calendar/UserProfile';
import useScheduleManagement from '@/hooks/useScheduleManagement';

const Calendar = () => {
  const { schedule, schedulePostMutate, scheduleDeleteMutate, schedulePutMutate } = useScheduleManagement();

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
