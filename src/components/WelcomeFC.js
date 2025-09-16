

function WelcomeFC (props){
    console.log(props);
    return (
        <>
        <h1>hello, {props.name}</h1>
        <p>age: {props.age}</p>
        <p>title: {props.title}</p>
        </>

    );
}

export default WelcomeFC;