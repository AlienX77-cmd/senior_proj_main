import "./Home.css";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeStockCard from "../../Components/HomeStockCard/HomeStockCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeRightSide from "../../Components/HomeStockCard/HomeRightSide";

function Home() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <HomeStockCard />
        <HomeRightSide />
      </div>
    </div>
  );
}

export default Home;
