export const getDday = (dDay: string) => {
  const today = new Date();
  const dday = new Date(`${dDay} 00:00:00`);
  let diff = today.getTime() - dday.getTime();
  diff = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (diff >= 0) {
    return `+${diff}`;
  } else {
    return `${diff}`;
  }
};
