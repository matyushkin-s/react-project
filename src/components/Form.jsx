import React from 'react'

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter text' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form