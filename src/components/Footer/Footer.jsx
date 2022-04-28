import s from "../Footer/Footer.module.css"


let Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerText}>
            все права защищены &copy;
            </div>
        </footer>
    )
}

export default Footer;