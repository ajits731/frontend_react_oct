import MainComponent from "./components/classComponent";
import SecondaryComponent from "./components/classComponent2";
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  
  const updateCounter = () => {
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <MainComponent counter={counter} updateFunction={updateCounter} label={'Button1'} />
    </div>
  );
}

export default App;
