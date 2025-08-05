function Item({ item, remove }) {
  return (
    <li style={{
      padding: 30,
      borderBottom: "1px solid #ddd",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }}>
     <span>
        {item.context} -<b>{item.name}</b>
     </span>
     <button onClick={() => remove(item.id)}>Delete</button>
    </li>
  )
}

export default Item;