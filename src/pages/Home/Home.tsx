
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import s from "./Home.module.scss";

export const Home = () => {
    return (
        <>
            <Header />

            <main className={s.main}>
                <section className={s.hero}>
                    <h1>ברוכים הבאים לבית חב״ד</h1>
                    <p>מקום פתוח בלב יפו — תפילה, שיעורים, שבתות, ואהבת ישראל.</p>

                    <div className={s.ctaRow}>
                        <a className={s.primary} href="#times">לזמני היום</a>
                        <a className={s.secondary} href="#donate">לתרומה</a>
                    </div>
                </section>

                <section id="times" className={s.section}>
                    <h2>זמני היום</h2>
                    <p className={s.muted}>בגרסה 1 נשים כאן “שחרית/מנחה/ערבית” + כפתור לעדכון.</p>
                </section>

                <section id="donate" className={s.section}>
                    <h2>תרומה</h2>
                    <p className={s.muted}>קישור לתרומה + סיפור קצר של השפעה.</p>
                </section>

                <section id="contact" className={s.section}>
                    <h2>צור קשר</h2>
                    <p className={s.muted}>טלפון / וואטסאפ / כתובת.</p>
                </section>
            </main>

            <Footer />
        </>
    );
};
