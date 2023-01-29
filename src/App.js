// import ToggleButton from "./shared/components/ToggleButton";
// import HeaderMenu from "./modules/HeaderMenu";
// import MyBooks from "./modules/MyBooks";
// import Tabs from "./modules/Tabs";

import "./App.css";
import Menu from "modules/Menu";
import UserRoutes from "UserRoutes";

// import menuItems from "./data/menu.json";
// import tabsItems from "./data/tabs.json"

function App() {
  return (
    <div className="App">
      <Menu />
      <UserRoutes />
      {/* <Tabs items={tabsItems} /> */}
      {/* <ToggleButton text="Click me" /> */}
      {/* <HeaderMenu items={menuItems} /> */}
      {/* <MyBooks /> */}
    </div>
  );
}

export default App;
