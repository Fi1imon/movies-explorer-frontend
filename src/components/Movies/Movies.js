import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";


const Movies = ({ movies }) => {
  const isMoreButtonShown = true;

  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList
          movies={ movies }
        />
        <MoreMovies
          isButtonShown={isMoreButtonShown}
        />
      </section>
      <Footer />
    </>
  )
}

export default Movies
