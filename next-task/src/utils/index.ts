import { ICall, ICallResponse } from '@/types/api';
import { ICallFilter } from '@/types/global';
import tinycolor from 'tinycolor2';

export const isClient = () => typeof window !== 'undefined';

export const alertAnError = (error: unknown) => {
  if (isClient()) alert(JSON.stringify(error));
};

export function darkenColor(hexColor: string, percent = 50): string {
  const color = tinycolor(hexColor);
  const darkerColor = color.darken(percent);
  return darkerColor.toHexString();
}

export const getMilliseconds = (time = 7) => time * 60000;

export const secondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes === 1 && remainingSeconds === 1) {
    return `${minutes} minute ${remainingSeconds} second`;
  } else if (minutes === 1) {
    return `${minutes} minute ${remainingSeconds} seconds`;
  } else if (remainingSeconds === 1) {
    return `${minutes} minutes ${remainingSeconds} second`;
  } else {
    return `${minutes} minutes ${remainingSeconds} seconds`;
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return date.toLocaleDateString('en-US', options);
};

export const getFilteredCalls = (
  data: ICallResponse | undefined | null,
  filter: ICallFilter
) =>
  filter === 'All'
    ? data?.nodes
    : filter === 'Archived'
    ? data?.nodes.filter((item) => !!item.isArchived)
    : filter === 'missed'
    ? data?.nodes?.filter((item) => item.callType === 'missed')
    : filter === 'voicemail'
    ? data?.nodes?.filter((item) => item.callType === 'voicemail')
    : filter === 'answered'
    ? data?.nodes?.filter((item) => item.callType === 'answered')
    : data?.nodes.filter((item) => !item.isArchived);

export const getObjectKeys = <T extends {}>(obj: T) =>
  Object.keys(obj) as (keyof T)[];
