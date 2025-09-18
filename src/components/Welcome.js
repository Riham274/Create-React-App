import React from "react";

class Welcome extends React.Component{
  state = {
    fname: "riham",
    lname: "ahmad" 
  }

    render(){
      console.log("render phase")
      console.log(this.state);
      console.log("state phase")

        return (
        <>
          <h1>hello, {this.props.name}</h1>
          <p>age: {this.props.age}</p>
          <p>title: {this.props.title}</p>

          <button onClick={() => {
            this.setState({
              lname: "soso"
             })
          }
          }>
            change my name
          </button>
          
          <h6>Created by, {this.state.fname} {this.state.lname}</h6>
        </>
        );
    }
    componentDidMount(){
      
      console.log("component phase")

    }

}

export default Welcome;