import './AboutProject.css';

function AboutProject(){
    return(
        <section  id="about-project" className="about-project">
  <h2 className="about-project__title">О проекте</h2>
  <div className="about-project__stages">
    <div className="about-project__stage">
      <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
      <p className="about-project__paragraph">
        Составление плана, работу над бэкендом, вёрстку, добавление
        функциональности и финальные доработки.
      </p>
    </div>
    <div className="about-project__stage">
      <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project__paragraph">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.
      </p>
    </div>
  </div>
  <div className="about-project__block">
    <div className="about-project__backend">
      <p className="about-project__backend-block">1 неделя</p>
      <p className="about-project__backend-paragraph">Back-end</p>
    </div>
    <div className="about-project__frontend">
      <p className="about-project__frontend-block">4 недели</p>
      <p className="about-project__frontend-paragraph">Front-end</p>
    </div>
  </div>
</section>

)
}
export default AboutProject;