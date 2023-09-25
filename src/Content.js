import React from 'react'
import { useState } from 'react'
import {FaRegTrashAlt} from "react-icons/fa";

const Content = ()=>{

    const [items,setitems]=useState(
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
            
        }


    return(

        <main> 

            <ul>
                {items.map(item=>(
                    <li className="item" key ={items.id}>
                        <input type="checkbox" 
                        onChange={()=>handleCheck(item.id)}
                        checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaRegTrashAlt
                            role="button"
                            tabIndex="0"
                        />

                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content