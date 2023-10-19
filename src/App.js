import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from 'react';
import AddItem from "./AddItem"; 
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(JSON.parse
    (localStorage.getItem('todo_list')));

  const [newItem, setNewItem] = useState('');

  const[search,setSearch] = useState('');

  const addItem = (item)=>{
    const id=items.length ? items[items.length-1].id+1 :1
    const addNewItem = {id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

  }

  const handleCheck = (id)=> {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  const handleDelete = (id)=> {
    const listItem = items.filter((item) =>
      item.id !== id
    );
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);

    setNewItem('');
  }

  // const search = (e)=>{

  // }

  return (
    <div className="App">
      <Header title="DO TODAY" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem} // Make sure setNewItem is correctly passed as a prop
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} // Corrected function name
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
