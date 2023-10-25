import './Techs.css';

function Techs(){
    return(
    <section id="technology" className="technology">
  <h2 className="technology__title">Технологии</h2>
  <div className="technology__block">
    <h2 className="technology__subtitle">7 технологий</h2>
    <p className="technology__paragraph">
      На курсе веб-разработки мы освоили технологии, которые применили в
      дипломном проекте.
    </p>
    <ul className="technology__lists">
      <li className="technology__list">
        HTML
      </li>
      <li className="technology__list">
        CSS
      </li>
      <li className="technology__list">
        JS
      </li>
      <li className="technology__list">
        React
      </li>
      <li className="technology__list">
        Git
      </li>
      <li className="technology__list">
        Express.js
      </li>
      <li className="technology__list">
        mongoDB
      </li>
    </ul>
  </div>
</section>
)}
export default Techs;