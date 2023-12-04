import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeStockCard from "./Components/HomeStockCard/HomeStockCard";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <HomeStockCard />
      </div>
    </div>
  );
}

export default App;
