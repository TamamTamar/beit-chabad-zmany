// src/types/zmanimType.ts

export type HebcalItem = {
    title: string;
    date: string;
    category: string;
    hebrew?: string;
    link?: string;
    memo?: string;
};

export type HebcalData = {
    items: HebcalItem[];
};

export type CandleTimes = {
    date: string;
    parasha: string;
    candles: string;
    havdalah: string;
    locationName?: string;
};

export type UseZmanimState = {
    data: CandleTimes | null;
    loading: boolean;
    error: string | null;
};
