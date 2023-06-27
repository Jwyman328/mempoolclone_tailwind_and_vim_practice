import React, { useState, useEffect } from "react";
import {
  LatestBlockMiningInfoProps,
  getLatestMiningBlockInfo,
} from "../../api/block";

export const LatestBlocks = () => {
  const [latestMiningBlockInfo, setLatestMiningBlockInfo] = useState<
    LatestBlockMiningInfoProps[]
  >([]);

  const fetchLatestMiningBlockInfo = async () => {
    const fetchedLatestInfo = await getLatestMiningBlockInfo();
    setLatestMiningBlockInfo(fetchedLatestInfo);
  };

  useEffect(() => {
    fetchLatestMiningBlockInfo();
  }, []);

  const rows = latestMiningBlockInfo.map((block) => {
    return (
      <LatestBlockMiningInfo
        height={block.height}
        pool={block.pool}
        txs={block.txs}
        size={block.size}
      />
    );
  });
  return (
    <div className="flex flex-col flex-1  p-8 bg-slate-800 mt-7">
      <p className="text-blue-800 mb-3 text-center">Latest blocks</p>
      <div className="flex flex-row text-white w-full justify-between mb-3">
        <p className="w-[75px]">Height</p>
        <p className="w-[75px]">Pool</p>
        <p className="w-[75px] pl-3">TXs</p>
        <p className="w-[75px] text-center">Size</p>
      </div>
      <div className="flex flex-col justify-between items-between">{rows}</div>
    </div>
  );
};

const LatestBlockMiningInfo = ({
  height,
  pool,
  txs,
  size,
}: LatestBlockMiningInfoProps) => {
  return (
    <div className="flex flex-row text-white justify-between mb-3">
      <p className="w-[75px] text-blue-400">{height}</p>
      <p className="w-[75px]">{pool}</p>
      <p className="w-[75px]">{txs}</p>
      <div className="bg-purple-400 text-center w-[120px] rounded-lg">
        <p>{size}</p>
      </div>
    </div>
  );
};
