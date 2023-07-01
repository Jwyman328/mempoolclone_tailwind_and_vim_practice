import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MoreInfoFooter } from "../../components/MoreInfoFooter";
import {
  getConnectivityData,
  getLuquidityRankingsData,
} from "../../api/lightening";
import {
  ConnectivityRankingsTable,
  ConnectivityRankingsTableRow,
  LiquidityRankingsTable,
  LiquidityRankingsTableRow,
} from "./tables";
import { ChannelStatistics, NetworkStatistics } from "./statistics";

export const Lightening = () => {
  const [connectivityData, setConnectivityData] = useState<
    ConnectivityRankingsTableRow[]
  >([]);
  const [liquidityData, setLiquidityData] = useState<
    LiquidityRankingsTableRow[]
  >([]);
  useEffect(() => {
    const fetchLiquidityData = async () => {
      const rankingData = await getLuquidityRankingsData();
      setLiquidityData(rankingData);
    };
    fetchLiquidityData();
  }, []);

  useEffect(() => {
    const fetchConnectivityData = async () => {
      const rankingData = await getConnectivityData();
      setConnectivityData(rankingData);
    };
    fetchConnectivityData();
  }, []);
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
        <LiquidityRankingsTable rows={liquidityData} />
        <ConnectivityRankingsTable rows={connectivityData} />
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
