import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <p>
        <Button text="Play" type="button"></Button>
      </p>
      <p>
        <Button text="Enter"></Button>
      </p>
    </div>
  );
}

export default App;
