import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import worlds from "../../images/33__words.png"
import photo from "../../images/photo.png"
import gitar from "../../images/gitar.png"
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
function SavedMovies({width}){
    let count = 3;
    return(
        <>
        <Header widthWindow={width}/>
        <SearchForm/>
        <article className="elements">
        <ul className="elements__films">
        <MoviesCard src={worlds} title={"33 слова о дизайне"} onSaved={true}/>
        <MoviesCard src={photo} title={"Киноальманах «100 лет дизайна»"} onSaved={true}/>
        <MoviesCard src={gitar} title={"В погоне за Бенкси"} onSaved={true}/>
        </ul>
        <button
          className={`${(count<6) ? "elements__more-hidden elements__more" : "elements__more"}`}
          type="button"
          name="more"
          aria-label="Еще"
        >Еще</button>
        </article>
        <Footer/>
        </>
)}
export default SavedMovies;