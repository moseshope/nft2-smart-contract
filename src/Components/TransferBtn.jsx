import Moralis from "moralis";
import { useState } from "react";
import { useMoralis, useWeb3Transfer } from "react-moralis";


function Transfer({nftData, chooseNFT, isAuthenticated}) {
 
    const[_type, setType] = useState("");
    const _receiver = '0x971cD6b009c93577316234D8727e98682e055832';
    const[_naddress, setNaddress] = useState("");
    const[contract, setContract] = useState("");
    const[token_id, setToken_id] = useState()
    const web3Transfer = useWeb3Transfer();
    const [transferring, setTransferring] = useState(false);

    const setContractTypeHandler = (e) => {
        setContract(e.target.value);
    };

    const setAddressHandler = (e) => {
        setNaddress(e.target.value);
    };

    const setTokenIdHandler = (e) => {
        setToken_id(e.target.value);
    };

    const transferNativeBalance = (e) => {
        e.preventDefault()
        setTransferring(true);

        web3Transfer.fetch({
            params: {
                amount: 1,
                receiver: _receiver,
                contractAddress: _naddress,
                tokenId: token_id,
                type: _type,
            },
            onSuccess: (tx) =>
                tx.wait().then((newTx) => {
                    // This block will run once the transaction is completed
                    setTransferring(false);
                    console.log(newTx);
                }),
            onError: () => {
                setTransferring(false);
            },
        });
    };

    return (
        <div>
        {nftData ? nftData.result.filter(element => element.token_id === chooseNFT).map((element, i) =>{
          return(
            <div className='text-white' key={i}>
              <p value={contract} onChange={setContractTypeHandler}>{element.contract_type}</p>
              <p value={_naddress} onChange={setAddressHandler}>{element.token_address}</p>
              <p value={token_id} onChange={setTokenIdHandler}>{element.token_id}</p>
            </div>
          )
        }) : (<p className='hidden' >Loading your NFT balance</p>)} 

          <form onSubmit={transferNativeBalance}  className='lg:m-auto pt-8 pb-5 space-y-5 lg:w-full'>
          <div class="w-full"><button disabled={!isAuthenticated}  type="submit" target="_blank" class="
        w-full
        text-center
        uppercase
        font-primary font-bold
        leading-none
        text-xl
        inline-block
        py-8
        rounded-xl
        px-5
        text-[rgba(110,61,17,1)]
        hover:text-white
        bg-[rgba(237,184,85,1)]
        hover:bg-blue-400 hover:bg-opacity-70
        transition
        duration-0
        focus:outline-none   "> SWAP </button></div>

         
          </form>
        </div>
       
    )}

export default Transfer;

// import React from "react";
// import { useWeb3Transfer } from "react-moralis";

// const TransferNFT = ({_type, contract, _naddress,  _receiver, token_id}) => {
//       const { fetch, error, isFetching } = useWeb3Transfer({
//         type: _type,
//         receiver: _receiver,
//         contractAddress: _naddress,
//         tokenId: token_id,
//         amount: 1
//       }
      
//       );
      
    
//  return (
//         // Use your custom error component to show errors
//         <div className='lg:m-auto p-5 space-y-5 lg:w-3/4'>
//           <button className='w-full text-brown items-center hover:bg-blue-400 hover:text-white m-auto rounded p-4 bg-yellow-300' onClick={() => fetch()} >
//             Swap
//           </button>
//         </div>
//       );
//     };

// export default TransferNFT