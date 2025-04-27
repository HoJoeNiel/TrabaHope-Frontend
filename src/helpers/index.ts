export const getDaysAgo = (date: string | Date): number => {
  const now = new Date();
  const past = new Date(date);

  const diffsInMilliseconds = now.getTime() - past.getTime();
  const diffInDays = Math.floor(diffsInMilliseconds / (1000 * 60 * 60 * 24));

  return diffInDays;
};
