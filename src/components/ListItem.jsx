const ListItem = (props) => {
  return (
    <li className='item'>
      <i>{props.data.id}</i><br />
      <b>{props.data.title}</b>
    </li>
  )
}

export default ListItem;