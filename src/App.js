import "./index.scss";
import Menu from "modules/Menu";
import UserRoutes from "UserRoutes";

function App() {
  return (
    <div className="App">
      <Menu />
      <UserRoutes />
    </div>
  );
}

export default App;
