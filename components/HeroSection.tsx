"use client";
import {useState} from "react";
import {getWalletBalance} from "@/lib/solana";


const HeroSection=() =>{ 

    const [walletAddress, setWalletAddress] = useState("");
    const [balance, setBalance] =useState<number | null>(null);

    const handleAnalyze = async () => {
      try {
      const Walletbalance = await getWalletBalance(walletAddress);
      setBalance(Walletbalance);
      }
        catch (error) {
        console.error(error);
    
      }
  }
 
 return (
           <div className=" flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-4xl font-bold"> TradeLens </h1>
        <p> AI-Powered solana wallet analyzer  </p>
        <input
           placeholder="Enter Wallet Address"
           value ={walletAddress}
           onChange={(event) => setWalletAddress(event.target.value)} 
           className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
        />
        <button
         onClick= {handleAnalyze}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Analyze wallet
        </button>
        {balance !==null && ( 
          <div className ="mt-6 rounded-lg border p-4 w-full max-w-md text-center">
           <h2 className ="text-xl font-semibold"> Wallet Balance </h2>
           <p className ="text-3xl font-bold mt-2">
            {balance}
           </p>
           </div>
        )}

      </div>  )
}
export default HeroSection;