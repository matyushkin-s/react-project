const Input = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  }
  const handleFocus = (e) => {
    console.log('Focus');
  }

  const handleBlur = (e) => {
    console.log('Blur');
  }

  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
}

export default Input