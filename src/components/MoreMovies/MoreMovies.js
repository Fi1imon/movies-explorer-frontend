import Button from "../Button/Button";

const MoreMovies = ({ isButtonShown }) => {

  return (
    <div className="more-movies">
      {isButtonShown ? <Button
        buttonText="Ещё"
        buttonType="button"
        className="movies__more-button"
      /> : ""}
    </div>
  )
}

export default MoreMovies;
