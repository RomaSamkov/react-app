// import ToggleButton from "./shared/components/ToggleButton";
// import HeaderMenu from "./modules/HeaderMenu";
// import MyBooks from "./modules/MyBooks";
// import Tabs from "./modules/Tabs";

import "./App.css";
import Menu from "modules/Menu";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import BooksPage from "pages/BooksPage/BooksPage";
import PostsPage from "pages/PostsPage/PostsPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

// import menuItems from "./data/menu.json";
// import tabsItems from "./data/tabs.json"

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Tabs items={tabsItems} /> */}

      {/* <ToggleButton text="Click me" /> */}
      {/* <HeaderMenu items={menuItems} /> */}
      {/* <MyBooks /> */}
    </div>
  );
}

export default App;
