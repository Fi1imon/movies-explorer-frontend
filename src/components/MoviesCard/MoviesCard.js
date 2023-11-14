import { useState, useContext, useEffect } from "react";
import { useResolvedPath } from "react-router-dom";

import Button from "../Button/Button";
import { SavedMoviesContext } from "../../contexts/SavedMoviesContext";

const MoviesCard = ({ movie, onSaveMovie, onDeleteMovie }) => {
  const savedMovies = useContext(SavedMoviesContext);
  const [isMovieOwner, setIsMovieOwner] = useState(Boolean);
  const [isMouseOver, setIsMouseOver] = useState(false)
  const path = useResolvedPath().pathname;

  useEffect(() => {
    if(!movie.owner) {
      savedMovies.forEach((item) => {
        if(item.movieId === movie.id) {
          setIsMovieOwner(true)
        }
      })
    } else {
      setIsMovieOwner(true);
    }
  }, [])

  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes < 10 ? `0${minutes}` : minutes}м`;
  }

  const handleClick = () => {
    if(!isMovieOwner) {
      onSaveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      setIsMovieOwner(true)
    } else {
      movie.id ?
        onDeleteMovie(movie.id) :
        onDeleteMovie(movie.movieId)
      setIsMovieOwner(false)
    }
  }

  return (
    <li className="movie-card" onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
      {path === '/movies' ? <Button
          className={`
            movie-card__save-button
            ${isMouseOver || window.innerWidth < 1138 || isMovieOwner ? "movie-card__save-button_visible" : ""}
            ${isMovieOwner ? "movie-card__save-button_saved" : ""}
          `}
          buttonText={`${isMovieOwner ? "" : "Сохранить"}`}
        buttonType="button"
        handleClick={ handleClick }
      /> : <Button
        className={`
          movie-card__save-button
          movie-card__save-button_delete
          ${isMouseOver || window.innerWidth < 1138 || isMovieOwner ? "movie-card__save-button_visible" : ""}
        `}
        buttonType="button"
        handleClick={ handleClick }
      />}
      <a className="movie-card__image-link" href={ movie.trailerLink } target="_blank" rel="noreferrer">
        <img className="movie-card__image" src={ movie.image.url ? `https://api.nomoreparties.co/${ movie.image.url }` : movie.image } alt="movie"/>
      </a>
      <p className="movie-card__title">{ movie.nameRU }</p>
      <p className="movie-card__duration">{ convertDuration(movie.duration) }</p>
    </li>
  )
}

export default MoviesCard;
