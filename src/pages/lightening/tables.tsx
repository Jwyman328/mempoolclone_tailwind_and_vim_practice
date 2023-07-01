export type LiquidityRankingsTableRow = {
  alias: string;
  liquidity: string;
  usd: string;
};
type LiquidityRankingsTableProps = {
  rows: LiquidityRankingsTableRow[];
};
export const LiquidityRankingsTable = ({
  rows,
}: LiquidityRankingsTableProps) => {
  const displayRows = rows.map((row) => {
    return (
      <div className="flex flex-row justify-between mt-7">
        <p className="text-teal-400">{row.alias}</p>
        <p className="text-white">{row.liquidity}</p>
        <p className="text-green-400">{row.usd}</p>
      </div>
    );
  });
  return (
    <div className="p-8 w-[45%] bg-slate-700 mt-8">
      <p className="text-center mb-4 text-blue-300">Liquidity Rankings</p>
      <div className="w-full flex flex-row justify-between text-white">
        <p>{"Alias"}</p>
        <p>{"Liquidity"}</p>
        <p>{"USD"}</p>
      </div>
      <div>{displayRows}</div>
    </div>
  );
};

export type ConnectivityRankingsTableRow = {
  alias: string;
  channel: string;
  location: string;
};
type ConnectivityRankingsTableProps = {
  rows: ConnectivityRankingsTableRow[];
};
export const ConnectivityRankingsTable = ({
  rows,
}: ConnectivityRankingsTableProps) => {
  const displayRows = rows.map((row) => {
    return (
      <div className="flex flex-row justify-between mt-7 text-center">
        <p className="text-teal-400 w-1/3 text-left">{row.alias}</p>
        <p className="text-white w-1/3 text-center">{row.channel}</p>
        <p className="text-green-400 w-1/3 text-right">{row.location}</p>
      </div>
    );
  });
  return (
    <div className="p-8 w-[45%] bg-slate-700 mt-8">
      <p className="text-center mb-4 text-blue-300">Connectivity Rankings</p>
      <div className="w-full flex flex-row justify-between text-white">
        <p>{"Alias"}</p>
        <p>{"Channels"}</p>
        <p>{"Location"}</p>
      </div>
      <div>{displayRows}</div>
    </div>
  );
};
