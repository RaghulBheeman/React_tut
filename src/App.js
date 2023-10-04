import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from 'react'





function App() {
  const [items,setItems]=useState(
    [{
        id:1,
        checked:true,
        item:"practice coding"
    },
    {
        id:2,
        checked:true,
        item:"play cricket"
    },
    {
        id:3,
        checked:false,
        item:"Sleep well"
    }])

    const handleCheck=(id)=>{
        const listItems = items.map((item) =>
        item.id===id  ? {...item, checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify
        (listItems))
    }

    const handledelete = (id) => {
        const listItem = items.filter((item) =>
        item.id!==id)
        setItems(listItem)
        localStorage.setItem("todo_list",JSON.stringify
        (listItem))
    }

  return (
    <div className="App">
      <Header title = "DO TODAY" />
      <Content 
        items= {items}
        handleCheck={handleCheck}
        handledelete={handledelete}
      />
      <Footer 
        length={items.length}
      />
      
    </div>
  );
}

export default App;
