import React from 'react'
import { useState } from 'react'
import {FaRegTrashAlt} from "react-icons/fa";

const Content = ()=>{

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


    return(

        <main> 
            {items.length ? (
            <ul> 
                {items.map(item=>(
                    <li className="item" key ={items.id}>
                        <input type="checkbox" 
                        onChange={()=>handleCheck(item.id)}
                        checked={item.checked}
                        />
                        <label style = {(item.checked) ? {textDecoration: 'line-through'} : null}>
                           {item.item}</label>
                        <FaRegTrashAlt
                            role="button"
                            onClick={()=>handledelete(item.id)}
                            tabIndex="0"
                        />

                    </li>
                ))}
            </ul>

            ):(
                <p style={ { marginTop:'270px'}}>Your list is empty</p>
            )
            }
        </main>
    )
}

export default Content