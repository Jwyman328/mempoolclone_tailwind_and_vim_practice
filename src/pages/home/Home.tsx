import React, { useState, useEffect } from "react";
import { PastFutureBlockDivider } from "./PastFutureBlockDivider";
import { Header } from "./Header";
import { BlockProps, BlockSlider } from "./BlockSlider";
import { getPotentialBlocks, getBlockData } from "../../api/block";
import { TransactionFees } from "./TransactionFees";
import { DifficultyAdjustmentBar } from "./ DifficultyAdjustmentBar";
import { LatestBlocks } from "./LatestBlocks";
import { LatestTransactionTable } from "./LatestTransactions";
import { MoreInfoFooter } from "./MoreInfoFooter";

export const Home = () => {
  const [blocks, setBlocks] = useState<BlockProps[] | []>([]);

  const [potentialBlocks, setPotentialBlocks] = useState<BlockProps[] | []>([]);

  const fetchBlockData = async () => {
    const fetchedBlocks = await getBlockData();
    const fetchedPotentialBlocks = await getPotentialBlocks();

    setBlocks(fetchedBlocks);
    setPotentialBlocks(fetchedPotentialBlocks);
  };

  useEffect(() => {
    fetchBlockData();
  }, []);

  return (
    <div className="w-screen bg-slate-900 overflow-y-hidden">
      <Header />
      <div className="pl-20 mt-16 flex flex-row h-[250px] overflow-y-auto">
        {potentialBlocks.length > 1 ? (
          <BlockSlider blocks={potentialBlocks} />
        ) : null}
        <PastFutureBlockDivider />
        {blocks.length > 1 ? <BlockSlider blocks={blocks} /> : null}
      </div>
      <div className="flex flex-row items-strech">
        <TransactionFees />
        <div className="w-[50px]"></div>
        <DifficultyAdjustmentBar />
      </div>
      <div className="flex flex-row">
        <LatestBlocks />
        <div className="w-[50px]"></div>
        <LatestTransactionTable />
      </div>
      <div>
        <MoreInfoFooter />
      </div>
    </div>
  );
};
