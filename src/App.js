
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import {useMoralis, useMoralisWeb3ApiCall, useMoralisWeb3Api } from "react-moralis";
import Assets from "./Components/Pages/NftData";
import Home from "./Components/Pages/Home";
import SellNFT from "./Components/SellNFT";
import SideNav from "./Components/SideNav";
import Faq from "./Components/Faq";
import Polygon from "./Components/Pages/Polygon";
import Farm from "./Components/Pages/Farm";

function App() {
  const[chooseNFT, setChooseNFT] =useState()


  const [click, setClick] = useState(false)

  const handleClick = () => {
      setClick(!click)
  }
  

  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
    logout
  } = useMoralis();



  useEffect(() => {
    if (!isWeb3Enabled) {
        enableWeb3();
    }}, [isWeb3Enabled]);


  // ----- Authenticate in Metamask---------
 
  const [address, setAddress] = useState();
  const [values, setValues] = useState("polygon");
  const Web3Api = useMoralisWeb3Api();
  // NFT API CALL
  const { fetch: nftFetch, data: nftData } = useMoralisWeb3ApiCall(
    Web3Api.account.getNFTs,
    {
      chain: values,
    }
  );
  useEffect(() => { 
      if (user) {
        fetch({ chain: values });
        nftFetch();
        setAddress(user.attributes.ethAddress);
      }
    },  [
    user,
    values,
  ]);
 
  return (
    <BrowserRouter>

    <div className="">
       <Nav authenticate={authenticate} logout={logout} click={click} handleClick={handleClick} setClick={setClick} user={user} isAuthenticated={isAuthenticated} />
       <SideNav authenticate={authenticate} click={click} handleClick={handleClick} setClick={setClick} user={user} isAuthenticated={isAuthenticated} />
       <Routes>

        <Route path="/" exact element={<Home isAuthenticated={isAuthenticated}   nftData={nftData} chooseNFT={chooseNFT} setChooseNFT={setChooseNFT} />} />
        <Route path="/swap" exact element={<SellNFT />} />
        <Route path="/assets" exact element={<Assets nftData={nftData} />} />
        <Route path="/polygon" exact element={<Polygon isAuthenticated={isAuthenticated}   nftData={nftData} />} />
        <Route path="/faq" exact element={<Faq  />} />
        <Route path="/farm" exact element={<Farm />} />
      </Routes>
      
      
      
      </div>
    </BrowserRouter>
    
     
   
  );
}

export default App;
