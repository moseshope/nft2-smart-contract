import React from 'react'
import { useState } from 'react'
import { BsArrowDownUp } from "react-icons/bs";
import { useWeb3Transfer } from "react-moralis";
import { Link } from 'react-router-dom';
import Transfer from './TransferBtn';



const SellNFT = ({nftData, setChooseNFT, chooseNFT, isAuthenticated}) => {

  
 
  return (
    <div className='lg:h-[90vh] w-4/5 lg:w-1/4 m-auto items-center justify-center'>
     <h2  class="mt-2 mb-6 text-white text-2xl flex items-center justify-center "><span >Buy &amp; Sell Your NFTs with 1-click</span><span  class="ml-2 text-4xl">👇</span></h2>

      <div class=" text-xl font-light w-full    flex flex-col space-y-6  text-gray-900 bg-[rgba(222,218,210,1)] py-8 px-8 rounded-3xl tracking-normal  text-left">
        <div><span class="uppercase text-lg font-normal"><span>You deposit </span></span></div><div class="flex justify-between items-center"><div class="flex space-x-2">
          <div class="  cursor-pointer  hover:bg-gray-900 hover:bg-opacity-25 px-4   py-2 rounded-md flex">
            <div>NFT</div></div><div class=" cursor-pointer hover:bg-gray-900 hover:bg-opacity-25 px-4 py-2 rounded-md     "> ETH </div></div><div class="flex space-x-4 items-end">
            <span class="text-45px"><div><span>  </span>
            </div>
            </span>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="exchange-icon flex pt-8 pb-8 justify-center items-center text-white">
                    <BsArrowDownUp size={48} />
                    </div>


      <div class=" text-xl font-light w-full    flex flex-col space-y-6  text-gray-900 bg-[rgba(222,218,210,1)] py-8 px-8 rounded-3xl tracking-normal  text-left">
        <div><span class="uppercase text-lg font-normal"><span>You deposit </span></span></div><div class="flex justify-between items-center"><div class="flex space-x-2">
          <div class="  cursor-pointer  hover:bg-gray-900 hover:bg-opacity-25 px-4   py-2 rounded-md flex">
            <div>NFT</div></div><div class=" cursor-pointer hover:bg-gray-900 hover:bg-opacity-25 px-4 py-2 rounded-md     "> ETH </div></div><div class="flex space-x-4 items-end">
            <span class="text-45px"><div><span>  </span>
            </div>
            </span>
            <div>
            </div>
          </div>
        </div>
      </div>


      
      
      <Transfer nftData={nftData} isAuthenticated={isAuthenticated}  chooseNFT={chooseNFT}  />
      {/* <TransferNFT _type={_type} contract={contract} _naddress={_naddress} _receiver={_receiver} token_id={token_id} /> */}
      <div  class="flex w-full text-[14px] space-y-4 md:space-x-8 pb-40">
        <Link to="/assets" class="text-[rgba(110,61,17,1)] hover:text-white
        bg-[rgba(237,184,85,1)] text-center tracking-normal font-primary font-normal leading-none text-2xl block md:inline-block rounded-lg py-4 px-5 hover:text-white bg-secondary hover:bg-blue-400 hover:bg-opacity-70 transition duration-0 focus:outline-none"> NFT20 Pools
         </Link>
        <a href="https://docs.nft20.io" target="_blank" class="text-center tracking-normal font-primary font-normal leading-none text-2xl block md:inline-block rounded-lg py-4 px-5 text-[rgba(110,61,17,1)] hover:text-white bg-white hover:bg-blue-400 hover:bg-opacity-70 transition duration-0 focus:outline-none"> Documentation </a>
        </div>
  
          






    </div>
  )
}

export default SellNFT