
const Button = ({ className, buttonText, buttonType, handleClick }) => {

  return (
    <button
      className={ className }
      type={ buttonType }
      onClick={handleClick}
    >{ buttonText }</button>
  )
}

export default  Button;
