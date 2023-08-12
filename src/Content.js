import React from 'react'

const Content = ()=>{

    const handleNameChange = ()=>{
        const names = ["Raghul","Deepika"];
        const int = Math.floor(Math.random()*2);
        return names[int];
    }
    return(
        <p>Let {handleNameChange()} learn React</p>
    )
}

export default Content