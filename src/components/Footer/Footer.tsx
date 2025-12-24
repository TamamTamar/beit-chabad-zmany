import s from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.inner}>
                <span>© {new Date().getFullYear()} בית חב״ד</span>
                <span className={s.muted}>באהבת ישראל</span>
            </div>
        </footer>
    );
};
