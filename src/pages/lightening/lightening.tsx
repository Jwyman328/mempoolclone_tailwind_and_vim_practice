import React from "react";
import { Header } from "../../components/Header";
import { MoreInfoFooter } from "../../components/MoreInfoFooter";

export const Lightening = () => {
  return (
    <div className="w-screen bg-slate-900 overflow-y-hidden min-h-screen flex flex-col">
      {" "}
      <Header />
      <div className="w-full min-h-[200px] bg-blue-500 flex">
        {" "}
        mock image of lightening network
      </div>
      <div className="w-full flex flex-row justify-between bg-slate-800">
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
      </div>
      <MoreInfoFooter />
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
    <div className="flex flex-col justify-evenly p-10">
      <p className={`${titleStyle}`}>{title}</p>
      <p className={`mb-1 mt-1 ${valueStyle}`}>{value}</p>
      <p className={`${amountStyle}`}>{amount}</p>
    </div>
  );
};
