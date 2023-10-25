import './Footer.css';

function Footer(){
    const date = new Date(Date.now()).getFullYear();
    return(
        <footer className="footer">
        <p className="footer__paragraph">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__info">
          <p className="footer__copyright">© {date}</p>
          <nav className="footer__links">
            <a className="footer__link" target="_blank" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
            <a className="footer__link" target="_blank" href="https://github.com/DariaBold">
              Github
            </a>
          </nav>
        </div>
      </footer>      
)}
export default Footer;