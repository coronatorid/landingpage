const Card = (props) => {
  return (
    <div className="rounded-md shadow-md border border-gray-300 dark:border-gray-900 p-3">
      {props.children}
    </div>
  )
}

export default Card;
