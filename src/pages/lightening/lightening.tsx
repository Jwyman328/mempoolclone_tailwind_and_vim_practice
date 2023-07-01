import React from "react";
import { Header } from "../../components/Header";
import { MoreInfoFooter } from "../../components/MoreInfoFooter";
const liquidityRanksData: LiquidityRankingsTableRow[] = [
  { alias: "btsdas", liquidity: "947,96", usd: "$28,992,437" },
  { alias: "btsdas", liquidity: "947,96", usd: "$28,992,437" },
  { alias: "btsdas", liquidity: "947,96", usd: "$28,992,437" },
  { alias: "btsdas", liquidity: "947,96", usd: "$28,992,437" },
  { alias: "btsdas", liquidity: "947,96", usd: "$28,992,437" },
  { alias: "btsdas", liquidity: "947,96", usd: "$28,992,437" },
];

const connectivityRanksData: ConnectivityRankingsTableRow[] = [
  { alias: "Coinbase", channel: "947,96", location: "United States" },
  { alias: "Kraken", channel: "947,96", location: "Brussels" },
  { alias: "Binance", channel: "947,96", location: "Spain" },
  { alias: "Binance", channel: "947,96", location: "United States" },
  { alias: "CoinGate", channel: "947,96", location: "United States" },
  { alias: "kraken", channel: "947,96", location: "Brussels" },
];
export const Lightening = () => {
  return (
    <div className="w-screen bg-slate-900 overflow-y-hidden min-h-screen flex flex-col">
      <Header />
      <div className="w-full min-h-[200px] bg-blue-500 flex">
        mock image of lightening network
      </div>
      <div className="w-full flex flex-row justify-between bg-slate-800">
        <NetworkStatistics />
        <ChannelStatistics />
      </div>
      <div className="mt-5 h-[400px] flex flex-row justify-between">
        {/**graphs */}
        <div className="h-full bg-slate-700 w-[45%]">
          <div className="h-2/6 flex flex-row w-full justify-between p-4">
            <CapacityItem title="Clearnet Capacity" total={"5,147.71"} />
            <CapacityItem title="Tor Capacity" total={"238.80"} />
            <CapacityItem title="Unknown Capacity" total={"195.93"} />
          </div>
          <div className="h-3/6 w-full text-center">spinny graph</div>
          <button className="h-1/6 text-teal-300 text-center w-full">
            View more {">>"}
          </button>
        </div>
        <div className="mt-5 flex flex-col w-[45%] bg-slate-700 p-4">
          <p className="h-1/6 text-center text-blue-600">
            Lightening Network History
          </p>
          <div className="h-4/6 text-center"> network graph</div>
          <button className="h-1/6 text-teal-300 text-center w-full">
            View more {">>"}
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <LiquidityRankingsTable rows={liquidityRanksData} />
        <ConnectivityRankingsTable rows={connectivityRanksData} />
      </div>
      <MoreInfoFooter />
    </div>
  );
};
type CapacityItemProps = {
  title: string;
  total: string;
};
const CapacityItem = ({ title, total }: CapacityItemProps) => {
  return (
    <div className="text-center p-4">
      <p className="text-blue-500 mb-2">{title}</p>
      <p className="text-white">
        {total} <span className="text-gray-400">BTC</span>
      </p>
    </div>
  );
};
const NetworkStatistics = () => {
  return (
    <div className="bg-slate-800 w-[45%]">
      <div className="text-center text-gray-400">NETWORK STATITICS</div>
      <div className="flex flex-row bg-slate-700 text-center justify-center">
        <StatItem
          title={"capacity"}
          titleStyle="text-blue-700"
          value="5,496.12 BTC"
          valueStyle="text-white"
          amount="$165,717,984"
          amountStyle="text-green-400"
        />
        <StatItem
          title={"Node"}
          titleStyle="text-blue-700"
          value="15,450"
          valueStyle="text-white"
          amount="-.03"
          amountStyle="text-red-400"
        />
        <StatItem
          title={"Channels"}
          titleStyle="text-blue-700"
          value="69,103"
          valueStyle="text-white"
          amount="-.03"
          amountStyle="text-red-400"
        />
      </div>
    </div>
  );
};
const ChannelStatistics = () => {
  return (
    <div className="bg-slate-800 w-[45%]">
      <div className="text-center text-gray-400">CHANNELS STATISTICS</div>
      <div className="flex flex-row bg-slate-700 text-center justify-center">
        <StatItem
          title={"Avg Capacity"}
          titleStyle="text-blue-700"
          value="7,948,098 sats"
          valueStyle="text-white"
          amount="$2,429"
          amountStyle="text-green-400"
        />
        <StatItem
          title={"Avg Fee Rate"}
          titleStyle="text-blue-700"
          value="562"
          valueStyle="text-white"
          amount=".04%"
          amountStyle="text-red-400"
        />
        <StatItem
          title={"Avg Base Fee"}
          titleStyle="text-blue-700"
          value="853 mSats"
          valueStyle="text-white"
          amount="-.08"
          amountStyle="text-red-400"
        />
      </div>
    </div>
  );
};
type StatItemProps = {
  title: string;
  titleStyle?: string;
  amount: string;
  amountStyle?: string;
  value: string;
  valueStyle?: string;
};
const StatItem = ({
  title,
  titleStyle,
  amount,
  amountStyle,
  value,
  valueStyle,
}: StatItemProps) => {
  return (
    <div className="flex flex-col justify-evenly p-6">
      <p className={`${titleStyle}`}>{title}</p>
      <p className={`mb-1 mt-1 ${valueStyle}`}>{value}</p>
      <p className={`${amountStyle}`}>{amount}</p>
    </div>
  );
};
type LiquidityRankingsTableRow = {
  alias: string;
  liquidity: string;
  usd: string;
};
type LiquidityRankingsTableProps = {
  rows: LiquidityRankingsTableRow[];
};
const LiquidityRankingsTable = ({ rows }: LiquidityRankingsTableProps) => {
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

type ConnectivityRankingsTableRow = {
  alias: string;
  channel: string;
  location: string;
};
type ConnectivityRankingsTableProps = {
  rows: ConnectivityRankingsTableRow[];
};
const ConnectivityRankingsTable = ({
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
