import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Vote from "./components/Vote/Vote";
import menuItems from "./data/menuItems.json";

function App() {
  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <Menu menuItems={menuItems} />
      <ToggleButton text="Click Me" />
      <Vote />
      {/* <p>
        <Button text="Play" type="button"></Button>
      </p>
      <p>
        <Button text="Enter"></Button>
      </p> */}
    </div>
  );
}

export default App;
