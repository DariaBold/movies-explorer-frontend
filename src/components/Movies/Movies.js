import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
function Movies({width}){
    return (
    <main>
        <Header widthWindow={width}/>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
    </main>

)
}
export default Movies;