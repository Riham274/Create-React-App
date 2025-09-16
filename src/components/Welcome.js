import React from "react";

class Welcome extends React.Component{
    render(){
        return (
        <>
          <h1>hello, {props.name}</h1>
          <p>age: {props.age}</p>
          <p>title: {props.title}</p>
        </>
        )
    }

}

export default Welcome;