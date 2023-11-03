import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";


const SavedMovies = ({ movies }) => {
  const isMoreButtonShown = false;

  return (
    <>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList
          movies={movies}
        />
        <MoreMovies
          isButtonShown={isMoreButtonShown}
        />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies
