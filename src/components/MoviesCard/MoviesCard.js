import { useState } from "react";
import { useResolvedPath } from "react-router-dom";

import Button from "../Button/Button";

const MoviesCard = ({ movieImage, movieName, movieDuration, movieOwner }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const isMovieOwner = movieOwner === 'user._id' // Проверяем, является ли пользователь владельцем фильма
  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes < 10 ? `0${minutes}` : minutes}м`;
  }
  const path = useResolvedPath().pathname;
  const isMoviesPage = () => {
    return  path === '/movies';
  };


  return (
    <li className="movie-card"  onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
      {isMoviesPage() ? <Button
        className={`movie-card__save-button ${isMouseOver || window.innerWidth < 1138 ? "movie-card__save-button_visible" : ""} ${isMovieOwner ? "movie-card__save-button_saved" : ""}`}
        buttonText={`${isMovieOwner ? "" : "Сохранить"}`}
        buttonType="button"
      /> : <Button
        className={`movie-card__save-button movie-card__save-button_delete ${isMouseOver || window.innerWidth < 1138 ? "movie-card__save-button_visible" : ""} `}
        buttonType="button"
      />}
      <img className="movie-card__image" src={movieImage} alt="movie"/>
      <p className="movie-card__title">{movieName}</p>
      <p className="movie-card__duration">{convertDuration(movieDuration)}</p>
    </li>
  )
}

export default MoviesCard;
