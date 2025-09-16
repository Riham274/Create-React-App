import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import WelcomeFC from "./components/WelcomeFC";

function App(){
  return(
    <div className="App">
    
     <WelcomeFC name="ahmad" age="20" title="js dev"/>
     <WelcomeFC name="riham" age="18" title="ts dev"/>
     <Welcome name="yara" age="15" title="ts dev"/>
    </div>
  );
}

export default App;