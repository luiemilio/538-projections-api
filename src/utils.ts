import type { GameDataInfo, Sport } from './types';

const padTo2Digits = (num: number): string => {
    return num.toString().padStart(2, '0');
};

const resetDate = (date: Date): Date => {
    date.setHours(0, 0, 0, 0);
    return date;
};

const getCurrentDate = (): Date => {
    const currentDate = new Date();
    return resetDate(currentDate);
};

export const normalize538DateString = (dateStr: string): string => {
    return dateStr.replace(/-/g, '/');
};

const stringToDate = (dateStr: string): Date => {
    const date = new Date(dateStr);
    return resetDate(date);
};

const dateToString = (date: Date): string => {
    return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-');
};

const date538StringToDate = (dateStr: string): Date => {
    const normalizedString = normalize538DateString(dateStr);
    const date = stringToDate(normalizedString);
    return resetDate(date);
};

export const getCurrentDateString = (): string => {
    const currentDate = getCurrentDate();
    return dateToString(currentDate);
};

export const sortDates = (a: string, b: string): number => {
    const dateA = date538StringToDate(a);
    const dateB = date538StringToDate(b);

    return dateB.valueOf() - dateA.valueOf();
};
