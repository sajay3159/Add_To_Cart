import React from 'react';

const User=(props)=>{
    console.log(props.data.name)
    // const {data} = props
    return(
        <div>
            <h1>User Component</h1>
            <h3>{props.data.name}</h3>
        </div>
    )
}

export default User;