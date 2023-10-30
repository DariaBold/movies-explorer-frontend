import './Portfolio.css';

function Portfolio(){
    return(
  <section className="portfolio">
  <h2 className="portfolio__title">Портфолио</h2>
  <nav> 
    <ul className="portfolio__links">
    <li className="portfolio__link-block">
    <a className="portfolio__link" target="_blank" href="https://dariabold.github.io/how-to-learn">
      <h2 className="portfolio__link-paragraph">Статичный сайт</h2>
      </a>
    </li>
    <li className="portfolio__link-block">
    <a className="portfolio__link" target="_blank" href="https://dariabold.github.io/russian-travel/">
      <h2 className="portfolio__link-paragraph">Адаптивный сайт</h2>
    </a>
    </li>
    <li className="portfolio__link-block">
    <a className="portfolio__link" target="_blank" href="https://dariabold.github.io/mesto-react/">
      <h2 className="portfolio__link-paragraph">Одностраничное приложение</h2>
      </a>
    </li>
    </ul>
  </nav>
</section>

)}
export default Portfolio;