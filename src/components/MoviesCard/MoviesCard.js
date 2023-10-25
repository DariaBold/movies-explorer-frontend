import './MoviesCard.css';

function MoviesCard({src, title}){
  return (
  <>
    <article className="elements__card">
      <img
        className="elements__image"
        alt="33 слова о дизайне"
        src={src}
      />
        <button
          className="elements__save"
          type="button"
          name="save"
          aria-label="Сохранить"
        >Сохранить</button>
      <div className="elements__text">
        <h2 className="elements__title">{title}</h2>
        <span className="elements__counter">1ч 17м</span>
      </div>
    </article>
    </>
)}
export default MoviesCard;