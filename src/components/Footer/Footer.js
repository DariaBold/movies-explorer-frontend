import "./Footer.css";

function Footer() {
  const date = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer">
      <p className="footer__paragraph">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">© {date}</p>
        <nav className="footer__links">
          <ul className="footer__links-nav">
            <li className="footer__link-yandex">
              <a
                className="footer__link"
                target="_blank"
                href="https://practicum.yandex.ru"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-git">
              <a
                className="footer__link"
                target="_blank"
                href="https://github.com/DariaBold"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
