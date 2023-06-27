export const DifficultyAdjustmentBar = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full bg-slate-800 p-4">
        <div className="h-[20px] bg-purple-800 w-full mb-2">
          <div className="h-[20px] bg-purple-300 w-1/2"></div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col text-center">
            <p className="text-lg text-white mb-1">~10.2 minutes</p>
            <p className="text-sm text-gray-500">Average block time</p>
          </div>
          <div className="text-center">
            <p className="text-lg text-red-600">
              1.84 <span className="text-gray-500 text-md">%</span>
              <p className="text-sm text-gray-500 mt-1">
                Previous: <span className="text-green-300">2.18 </span>%
              </p>
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-white">in ~6 days</p>
            <p className="text-sm text-gray-500 mt-1">June 28 at 2:05 PM</p>
          </div>
        </div>
      </div>
      <div className="mt-3 w-full flex flex-col">
        <div className="mt-3 bg-slate-800 pt-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-blue-400 pb-6">Incoming transactions</p>
            <div className="bg-slate-700 border-gray-200 rounded-lg w-2/3 mb-10">
              <div className="bg-green-400 w-2/3">
                <p> 1,085 vB/s</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] border-2 border-gray-400 mt-[4px] p-4">
            <div className="bg-pink-500 h-full">inner graph</div>
          </div>
        </div>
        <div className="h-[30px] w-full bg-slate-800"></div>
      </div>
    </div>
  );
};
