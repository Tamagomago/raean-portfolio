import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Experience } from '@/app/types/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getLatestDateValue = (date: string): number => {
  const matches = date.match(/\d{4}\.\d{1,2}/g);

  if (!matches) return 0;

  const latest = matches[matches.length - 1];

  const [year, month] = latest.split('.').map(Number);

  return year * 100 + month;
};

export const getLatestExperience = (experiences: Experience[], limit = 3): Experience[] => {
  return [...experiences]
    .sort((a, b) => getLatestDateValue(b.date_duration) - getLatestDateValue(a.date_duration))
    .slice(0, limit);
};

export const truncate = (str: string, length: number) => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
};
