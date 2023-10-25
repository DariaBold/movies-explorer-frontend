import './Portfolio.css';

function Portfolio(){
    return(
  <section className="portfolio">
  <h2 className="portfolio__title">Портфолио</h2>
  <nav className="portfolio__links">
    <div className="portfolio__link-block">
      <h2 className="portfolio__link-paragraph">Статичный сайт</h2>
      <a className="portfolio__link" target="_blank" href="https://dariabold.github.io/how-to-learn"></a>
    </div>
    <div className="portfolio__link-block">
      <h2 className="portfolio__link-paragraph">Адаптивный сайт</h2>
      <a className="portfolio__link" target="_blank" href="https://dariabold.github.io/russian-travel/"></a>
    </div>
    <div className="portfolio__link-block">
      <h2 className="portfolio__link-paragraph">Одностраничное приложение</h2>
      <a className="portfolio__link" target="_blank" href="https://dariabold.github.io/mesto-react/"></a>
    </div>
  </nav>
</section>

)}
export default Portfolio;