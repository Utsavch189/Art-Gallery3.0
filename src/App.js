import './App.css';
import Body from './Components/Body';
import React,{useEffect, useState} from 'react';
import { ethers } from 'ethers';
import Error from './Components/Error';
import { createContext } from 'react';


import Abi from './Utils/Abi.json';
import { Address } from './Utils/BlockAddress';
import Nav from './Components/Nav';
import Success from './Components/Success';
import Upload from './Components/Upload';
import LoadingToast from './Components/Loader';

export const Provide=createContext()

function App() {
  
  const [address,setAddress]=useState("");
  const[error,setError]=useState("");
  const[success,setSuccess]=useState("");
  const[balance,setBalance]=useState(null);
  const[contract,setContract]=useState(null);
  const[signer,setSigner]=useState(null)
  const[data,setData]=useState(null);
  const[is_loggedin,setIS_loggedin]=useState(false)

  const[loading,setLoading]=useState(false)

  function showUploadModal() {
    window.document.getElementById("popup-upload-modal").classList.add("flex");
    window.document.getElementById("popup-upload-modal").classList.remove("hidden");
  }

  function hideUploadModal() {
    window.document.getElementById("popup-upload-modal").classList.add("hidden");
    window.document.getElementById("popup-upload-modal").classList.remove("flex");
  }
  


  const connect=async()=>{
    if(!window.ethereum){
      setError("No Wallet Found");
      setIS_loggedin(false)
    }
    await window.ethereum.send("eth_requestAccounts");

    const ac=await window.ethereum.request({method:"eth_requestAccounts"});
    setAddress(ac[0]);
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    setSigner(provider.getSigner())

    const contract=new ethers.Contract(Address,Abi.abi,provider.getSigner());
    setContract(contract);

    const balance = await provider.getBalance(ac[0]);
    const balanceInEth = parseFloat(ethers.utils.formatEther(balance)).toFixed(3);
    setBalance(balanceInEth);
    setSuccess("Connected!")
    setIS_loggedin(true)
  }

  const getData=async()=>{
    const res=await contract.getAllUploads();
    setData(res)
  }

  useEffect(()=>{
    getData();
  },[address])

  const values={
    contract,
    address,
    connect,
    setSuccess,
    setError,
    balance,
    signer,
    showUploadModal,
    hideUploadModal,
    setLoading,
    getData,
    data,
    setData
  }
  if(is_loggedin){
  return (
    <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <LoadingToast states={loading}/>
        <Nav values={values}/> 
        <Upload values={values}/>
        {success&&<Success success={success}/>}
        {error&&<Error error={error}/>}
        <Body values={values}/>
    </div>
  );
  }
  else{
    return(
      <>
        <Nav values={values}/> 
        {success&&<Success success={success}/>}
        {error&&<Error error={error}/>}
      </>
    )
  }
  }
export default App;
