

export default function Home() {
  return (
    <main >
      <div className=" flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-4xl font-bold"> Tradelens </h1>
        <p> Ai-Powered solona wallet analyzer  </p>
        <input placeholder="Enter Wallet Address" className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Analyze wallet
        </button>
      </div>





    </main>
   
  );
}
