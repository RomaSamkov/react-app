import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import menuItems from "./data/menuItems.json";

function App() {
  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <Menu menuItems={menuItems} />
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
