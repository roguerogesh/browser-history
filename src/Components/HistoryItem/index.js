import './index.css'

const HistoryItem = props => {
  const {eachList, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachList
  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="domain-logo" />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        onClick={onDeleteItem}
        className="delete-logo"
      />
    </li>
  )
}

export default HistoryItem
