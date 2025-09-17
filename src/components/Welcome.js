import React from "react";

class Welcome extends React.Component{
    render(){
      console.log(this.props);
        return (
        <>
          <h1>hello, {this.props.name}</h1>
          <p>age: {this.props.age}</p>
          <p>title: {this.props.title}</p>
        </>
        );
    }

}

export default Welcome;