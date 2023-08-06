import { useEffect } from "react";

const Box = () => {
  const handleClick = () => {
    console.log('Click!');
  };

  useEffect(() => {
    console.log('Box rendered, event listener added');
    window.addEventListener('click', handleClick);

    // cleanup funk (destroy lifecycle hook)
    return () => {
      console.log('Box destroyed, listener removed');
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className=''>Box toggled component</div>
  )
}

export default Box;