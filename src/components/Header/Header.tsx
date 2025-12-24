import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.brand}>בית חב״ד</div>
                <nav className={s.nav}>
                    <a href="#times">זמני היום</a>
                    <a href="#donate">תרומה</a>
                    <a href="#contact">צור קשר</a>
                </nav>
            </div>
        </header>
    );
};
