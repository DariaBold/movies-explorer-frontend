import './AboutMe.css';

function AboutMe(){
    return(
<section id="student" className="about-me">
<h2 className="about-me__title">Студент</h2>
<div className="about-me__block">
  <div className="about-me__about">
    <h3 className="about-me__subtitle">Виталий</h3>
    <h4 className="about-me__subtitle-about">Фронтенд-разработчик, 30 лет</h4>
    <p className="about-me__paragraph">
      Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
      есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
      начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
      как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
      ушёл с постоянной работы.
    </p>
    <a className="about-me__paragraph-link" target="_blank" href="https://github.com/DariaBold">Github</a>
  </div>
  <div className="about-me__photo"></div>
</div>
</section>
)
}
export default AboutMe;