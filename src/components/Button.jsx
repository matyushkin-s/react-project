const Button = ({title, text, isDisabled, onClick, children}) => {

  return (
    <button
      onClick={onClick}
      title={ title }
      disabled={ isDisabled }
    >
      { text } { children }
    </button>
  )
}

export default Button;