import axios from "axios";
import type { CandleTimes, HebcalData } from "../types/zmanimType";

const HEBCALE_URL =
    "https://www.hebcal.com/shabbat?cfg=json&geonameid=293397&M=on";

export const hebcalService = {
    async getCandleTimes(): Promise<CandleTimes> {
        const { data } = await axios.get<HebcalData>(HEBCALE_URL);

        const candles = data.items.find((item) => item.category === "candles");
        const havdalah = data.items.find((item) => item.category === "havdalah");
        const parasha = data.items.find((item) => item.category === "parashat");

        if (!candles || !havdalah || !parasha) {
            throw new Error("Missing zmanim data from Hebcal response");
        }

        return {
            date: new Date(candles.date).toLocaleDateString("he-IL", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            }),
            parasha: parasha.hebrew ?? parasha.title,
            candles: candles.title.split(": ")[1] ?? candles.title,
            havdalah: havdalah.title.split(": ")[1] ?? havdalah.title,
        };
    },
};
