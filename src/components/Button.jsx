const Button = (props) => {

  return (
    <button
      className={props.class}
      onClick={ props.onClick }
      disabled={ props.isDisabled }
    >
      { props.children }
    </button>
  )
}

export default Button;