import './NavTab.css';
function NavTab(){
    return(
    <nav className="promo__links">
      <ul className="promo__links-nav">
    <li>
      <a href="#about-project" className="promo__link">
      О проекте
    </a>
    </li>
    <li>
    <a href="#technology" className="promo__link">
      Технологии
    </a>
    </li>
    <li>
    <a href="#student" className="promo__link">
      Студент
    </a>
    </li>
    </ul>
  </nav>
)}
export default NavTab;