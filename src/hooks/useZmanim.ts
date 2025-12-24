import { useEffect, useState } from "react";
import type { CandleTimes, UseZmanimState } from "../types/zmanimType";
import { hebcalService } from "../services/hebcalService";



export const useZmanim = (): UseZmanimState => {
    const [data, setData] = useState<CandleTimes | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const run = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await hebcalService.getCandleTimes();

                if (!cancelled) setData(res);
            } catch (e) {
                if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        run();
        return () => {
            cancelled = true;
        };
    }, []);

    return { data, loading, error };
};
