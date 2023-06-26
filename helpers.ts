export const getDateFormat = (date: any) => {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return `${day}-${month}-${year}`
}

export const convertSecondsToMinutesAndSeconds = (totalseconds: number) => {
  const minutes = Math.floor(totalseconds / 60);
  const seconds = totalseconds % 60;

  return `${minutes} minutes ${seconds} seconds`;
}