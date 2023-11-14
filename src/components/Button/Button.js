
const Button = ({ className, buttonText, buttonType, handleClick, isDisabled }) => {

  return (
    <button
      className={ className }
      type={ buttonType }
      onClick={handleClick}
      disabled={isDisabled}
    >{ buttonText }</button>
  )
}

export default  Button;
