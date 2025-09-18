import {useState} from "react";

function WelcomeFC (props){
   let [counter, setCounter] = useState(0);
    return (
        <>
        <h1>hello, {props.name}</h1>
        <p>age: {props.age}</p>
        <p>title: {props.title}</p>
        <h6>{counter}</h6>
        <button onClick={() => {
           setCounter(counter++);
          }
          }>
            +
          </button>
        </>

    );
}

export default WelcomeFC;