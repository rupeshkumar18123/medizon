import Navbar from "../navbar/navbar";

import "./home.css";
import data from "../Mdecine_Data.json";
import LotAn from "./LotAn";
import SearchBar from "../navbar/SearchBar";
import Offer2 from "./offer/Offer2";


function Home() {
  return (
    <>
    <SearchBar/>
    <div className="container-fluid b1">
      <LotAn />
       <img className="" src="https://images.apollo247.in/images/ui_revamp_askapollo.png?tr=w-1246,q-100,f-webp,c-at_max" alt="" />
       <h3 className="text1 t5">Hot Sellers....!!!!</h3>
      <Offer2/>
      <img src="https://images.apollo247.in/images/dtdashboard/DT_Banner_2.png?tr=w-1276,q-100,f-webp,c-at_max" alt="" />
    </div>
    </>
  );
}
export default Home;
