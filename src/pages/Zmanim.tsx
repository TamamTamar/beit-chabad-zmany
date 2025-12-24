import { useZmanim } from "../hooks/useZmanim";
import "../styles/zmanim.scss";


export const Zmanim = () => {
    const { data, loading, error } = useZmanim();

    if (loading) {
        return (
            <main dir="rtl" style={{ padding: 16 }}>
                טוען זמני שבת…
            </main>
        );
    }

    if (error) {
        return (
            <main dir="rtl" style={{ padding: 16 }}>
                שגיאה: {error}
            </main>
        );
    }

    if (!data) {
        return (
            <main dir="rtl" style={{ padding: 16 }}>
                אין נתונים להצגה
            </main>
        );
    }

       return (
        <main className="zmanim">
            <h1 className="zmanim__title">זמני שבת</h1>
            <div className="zmanim__date">{data.date}</div>

            <section className="zmanim__card">
                <div className="zmanim__parasha">{data.parasha}</div>

                <div className="zmanim__row">
                    <span className="zmanim__label">כניסת שבת</span>
                    <span className="zmanim__time">{data.candles}</span>
                </div>

                <div className="zmanim__row">
                    <span className="zmanim__label">צאת שבת</span>
                    <span className="zmanim__time">{data.havdalah}</span>
                </div>
            </section>
        </main>
    );


};
