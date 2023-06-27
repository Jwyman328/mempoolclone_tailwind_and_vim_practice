export const TransactionFees = () => {
  return (
    <div className="w-full">
      <TransactionFeeBar />
      <TransactionGraph />
    </div>
  );
};

const TransactionGraph = () => {
  return (
    <div className="flex flex-col w-full p-8 bg-slate-800 mt-6">
      <div className="flex flex-row justify-evenly text-blue-400 bg-slate-800 mb-4">
        <p>Purging</p>
        <p>Memory usage</p>
        <p>Unconfirmed</p>
      </div>
      <div className="flex flex-row justify-evenly mb-10 bg-slate-800">
        <p className="text-white text-lg">
          {"<"} 5.75 <span className="text-sm text-gray-500">sat/vB</span>
        </p>
        <div className="h-[24px] flex justify-center items-center rounded-md w-2/6 text-center bg-red-500">
          <p className="text-white text-sm">1 GB / 300MB</p>
        </div>
        <p className="text-white text-lg">
          342,360 <span className="text-gray-500 text-md">TXs</span>
        </p>
      </div>
      <div className="h-[400px]  w-full border-gray-400 border-2 p-4">
        <div className="w-full h-full bg-pink-500">this is a graph</div>
      </div>
    </div>
  );
};

const TransactionFeeBar = () => {
  return (
    <div className="bg-blue-800 p-4 w-full bg-slate-800">
      <div className="bg-yellow-500 text-white  flex flex-row justify-evenly rounded-r-lg mb-2">
        <p className="text-sm w-[110px]">No priority</p>
        <p className="text-sm w-[110px]">Low priority</p>
        <p className="text-sm w-[110px]">Medium priority</p>
        <p className="text-sm w-[110px]">High priority</p>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <div className="w-[110px]">
          <p className="text-lg text-white border-b-2 border-gray-300">
            18 <span className="text-gray-500 text-sm">sat/vB</span>
          </p>
          <p className="text-sm text-green-600 text-center">$0.75</p>
        </div>
        <div className="w-[110px]">
          <p className="text-lg text-white">
            18 <span className="text-gray-500 text-sm">sat/vB</span>
          </p>
          <div className="border-2 border-gray-200"></div>
          <p className="text-sm text-green-600 text-center">$0.75</p>
        </div>
        <div className="w-[110px]">
          <p className="text-lg text-white">
            18 <span className="text-gray-500 text-sm">sat/vB</span>
          </p>
          <div className="border-2 border-gray-200"></div>
          <p className="text-sm text-green-600 text-center">$0.75</p>
        </div>
        <div className="w-[110px]">
          <p className="text-lg text-white">
            18 <span className="text-gray-500 text-sm">sat/vB</span>
          </p>
          <div className="border-2 border-gray-200"></div>
          <p className="text-sm text-green-600 text-center">$0.75</p>
        </div>
      </div>
    </div>
  );
};
