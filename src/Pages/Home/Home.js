import "./Home.css";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeStockCard from "../../Components/HomeStockCard/HomeStockCard";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <HomeStockCard />
      </div>
    </div>
  );
}

export default Home;
