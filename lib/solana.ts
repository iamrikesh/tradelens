import{
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
}from "@solana/web3.js";


export const connection = new Connection(
    clusterApiUrl("devnet"),
     "confirmed"
    );

    export async function getWalletBalance(address:string): Promise<number>{
        try{
            const publicKey = new PublicKey(address);
            const balance = await connection.getBalance(publicKey);
            return balance / LAMPORTS_PER_SOL;
        }
        catch(error){
            throw new Error("Invalid wallet address:");
        }
    }