import FormAddBook from "./components/FormAddBook/FormAddBook";
// import { Header } from "./components/Header/Header";
// import Menu from "./components/Menu/Menu";
// import ToggleButton from "./components/ToggleButton/ToggleButton";
// import Vote from "./components/Vote/Vote";
// import menuItems from "./data/menuItems.json";
const items = {};

function App() {
  return (
    <div className="App">
      {/* <Header menuItems={menuItems} /> */}
      {/* <Menu menuItems={menuItems} /> */}
      {/* <ToggleButton text="Click Me" /> */}
      {/* <Vote /> */}
      <FormAddBook onSubmit={() => {}} />
    </div>
  );
}

export default App;
