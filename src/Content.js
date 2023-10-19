import React from 'react'

import {FaRegTrashAlt} from "react-icons/fa";

const Content = ({items,handleCheck,handleDelete})=>{

    


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
                            onClick={()=>handleDelete(item.id)}
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