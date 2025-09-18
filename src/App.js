import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Input from "./components/Input";
import Product from "./components/Product";
import Welcome from "./components/Welcome";
import WelcomeFC from "./components/WelcomeFC";

function App(){
  return(
    <div className="App">
     <Input label="name" type="text"/>
     <Input label="password" type="password"/>
     
    </div>
  );
}

export default App;