import React from "react";

class Welcome extends React.Component{
  state = {
    fname: "riham",
    lname: "ahmad"
  }
    render(){
      console.log(this.state);
        return (
        <>
          <h1>hello, {this.props.name}</h1>
          <p>age: {this.props.age}</p>
          <p>title: {this.props.title}</p>
          <h6>Created by, {this.state.fname} {this.state.lname}</h6>
        </>
        );
    }

}

export default Welcome;