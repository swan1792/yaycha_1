import List from "./List";
import Item from "./Item";
import Form from "./Form";
import { useState } from "react";

function App() {

  const [data, setData] = useState([
    {id: 1, context: "Hello World!", name: "Alice"},
    {id: 2, context: "React is fun.", name: "Bob"},
    {id: 3, context: "Yay, interesting.", name: "Chris"},
  ])

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  }

  const add = (context, name) => {
    const id = data[data.length-1].id+1;
    setData([...data, {id, context, name}]);
  }

  return (
    <div style={{
      maxWidth: 600, margin: "20px auto"
    }}>
      <h1>Yaycha</h1>

    <Form add={add}/>
    <List>
      {data.map(item => {
        return <Item item={item} key={item.id} remove={remove} />
      })}
    </List>
    </div>
  )
}

export default App;