
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    //Button ID
    const connectButton = document.getElementById("connect");

    //Click Event
    connectButton.addEventListener("click", () => {
      connectAccount();
    });

    //Connect Account Function
    async function connectAccount() {
      // try{
      //   const {ethereum}=window;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      window.ethereum.on("chainChanged",()=>{
        window.location.reload();
      })

      window.ethereum.on("accountsChanged",()=>{
        window.location.reload();
      })

      const account = accounts[0];
      const displayAccount= document.getElementById("displayAccount");
      displayAccount.innerHTML= accounts[0];

      // connectButton.innerHTML =
      //   account[0] +
      //   account[1] +
      //   account[2] +
      //   account[3] +
      //   account[4] +
      //   account[5] +
      //   "..." +
      //   account[38] +
      //   account[39] +
      //   account[40] +
      //   account[41];
    }
  
  }, []);

  return (
    <div>
      <div style={{
        background:"skyblue",
        // alignItems:"center",
        
        padding:"20px"
      }}>
          <button 
            id="connect" 
            style={{
              padding:"5px",
              background:"blue",
              color:"white",
              fontSize:"20px",
              borderRadius:"10px",
              border:"1px solid blue",
              cursor:"pointer",
              marginLeft:"550px ",
            }}>
            Connect Wallet
          </button>
      </div>
      <div id="displayAccount"></div>
      ACCOUNT ADDRESS CORRECT TARIKA MA DEKHAKO XAINA
    </div>
  );
}


// 0xB220288FA718Ab5c46fFe112afe3dC7d78ada02B
