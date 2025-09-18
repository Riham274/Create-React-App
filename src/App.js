import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Input from "./components/Input";
import Product from "./components/Product";
import Welcome from "./components/Welcome";
import WelcomeFC from "./components/WelcomeFC";

function App(){
  return(
    <div className="App">
    {/*
     <WelcomeFC name="ahmad" age="20" title="js dev"/>
     <WelcomeFC name="riham" age="18" title="ts dev"/>
     <Welcome name="yara" age="15" title="ts dev"/>
     <Product title="product-1" price="100" description="lorem lorem lorem 1"/>
     <Product title="product-2" price="200" description="lorem lorem lorem 2"/>
     <Product title="product-3" price="300" description="lorem lorem lorem 3"/>
    
     <Welcome name="yara" age="15" title="ts dev"/>
     <WelcomeFC name="ahmad" age="20" title="js dev"/>
     <WelcomeFC name="riham" age="18" title="ts dev"/>
     <Button title="hiii"/>
     */}
     <Input label="name" type="text"/>
     <Input label="password" type="password"/>
     
    </div>
  );
}

export default App;