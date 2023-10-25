import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import worlds from "../../images/33__words.png"
import photo from "../../images/photo.png"
import gitar from "../../images/gitar.png"
import pillars from "../../images/pillars.png"
import road from "../../images/road.png"
import home from "../../images/home.png"
import german from "../../images/german.png"
import graffite from "../../images/graffite.png"
import sport from "../../images/sport.png"
import party from "../../images/party.png"
import smoke from "../../images/smoke.png"
import computer from "../../images/computer.png"

function MoviesCardList(){
    return (
    <>
    <article className="elements">
        <ul className="elements__films">
        <MoviesCard src={worlds} title={"33 слова о дизайне"}/>
        <MoviesCard src={photo} title={"Киноальманах «100 лет дизайна»"}/>
        <MoviesCard src={gitar} title={"В погоне за Бенкси"}/>
        <MoviesCard src={pillars} title={"Баския: Взрыв реальности"}/>
        <MoviesCard src={road} title={"Бег это свобода"}/>
        <MoviesCard src={home} title={"Книготорговцы"}/>
        <MoviesCard src={german} title={"Когда я думаю о Германии ночью"}/>
        <MoviesCard src={graffite} title={"Gimme Danger: История Игги и The Stooges"}/>
        <MoviesCard src={sport} title={"Дженис: Маленькая девочка грустит"}/>
        <MoviesCard src={party} title={"Соберись перед прыжком"}/>
        <MoviesCard src={smoke} title={"Пи Джей Харви: A dog called money"}/>
        <MoviesCard src={computer} title={"По волнам: Искусство звука в кино"}/>
        </ul>
        <button
          className="elements__more"
          type="button"
          name="more"
          aria-label="Еще"
        >Еще</button>
    </article>
    </>
)}
export default MoviesCardList;