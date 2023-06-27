import React from "react";

export interface BlockProps {
  satPVB: string;
  rangeSatPVB: string;
  blockSize: string;
  transactionsTotal: string;
  avgTimeTillMine?: string;
  timeSinceMined?: string;
  hasBeenMined: boolean;
  blockNumber?: string;
}

interface BlockSliderProps {
  blocks: BlockProps[];
}

const Block = ({
  satPVB,
  rangeSatPVB,
  blockSize,
  transactionsTotal,
  avgTimeTillMine,
  hasBeenMined,
  timeSinceMined,
  blockNumber,
}: BlockProps) => {
  console.log("hassbeen mined and block numner", hasBeenMined, blockNumber);
  return hasBeenMined && blockNumber ? (
    <MinedBlockWrapper blockNumber={blockNumber}>
      <MainBlock
        satPVB={satPVB}
        rangeSatPVB={rangeSatPVB}
        blockSize={blockSize}
        transactionsTotal={transactionsTotal}
        blockNumber={blockNumber}
        timeSinceMined={timeSinceMined}
        hasBeenMined={hasBeenMined}
        avgTimeTillMine={avgTimeTillMine}
      />
    </MinedBlockWrapper>
  ) : (
    <MainBlock
      satPVB={satPVB}
      rangeSatPVB={rangeSatPVB}
      blockSize={blockSize}
      transactionsTotal={transactionsTotal}
      blockNumber={blockNumber}
      timeSinceMined={timeSinceMined}
      hasBeenMined={hasBeenMined}
      avgTimeTillMine={avgTimeTillMine}
    />
  );
};

const MinedBlockWrapper = ({
  children,
  blockNumber,
}: {
  children: React.ReactElement;
  blockNumber: string;
}) => {
  return (
    <div className="relative bottom-[36px]">
      <p className="text-center mb-4 text-teal-300 h-[20px]">{blockNumber}</p>
      {children}
    </div>
  );
};

const MainBlock = ({
  satPVB,
  rangeSatPVB,
  blockSize,
  transactionsTotal,
  timeSinceMined,
  hasBeenMined,
  avgTimeTillMine,
}: BlockProps) => {
  const timeSinceMinedDisplay =
    Number(timeSinceMined) > 60
      ? Number(Number(timeSinceMined) / 60).toFixed(0)
      : timeSinceMined;

  const avgTimeTillMineDisplay =
    Number(avgTimeTillMine) > 60
      ? Number(Number(avgTimeTillMine) / 60).toFixed(0)
      : avgTimeTillMine;

  const setTimeText = () => {
    if (Number(avgTimeTillMine) > 119 || Number(timeSinceMined) > 119) {
      return "hours";
    }
    if (Number(avgTimeTillMine) > 60 || Number(timeSinceMined) > 60) {
      return "hour";
    }

    if (Number(avgTimeTillMine) > 1 || Number(timeSinceMined) > 1) {
      return "minutes";
    } else {
      return "minute";
    }
  };

  const timeRepresentation = hasBeenMined
    ? `${timeSinceMinedDisplay} ${setTimeText()} ago `
    : `in ~${avgTimeTillMineDisplay} ${setTimeText()}`;

  const blockColor = hasBeenMined ? "bg-purple-300" : "bg-yellow-300";

  return (
    <div
      className={`${blockColor} mr-4 ml-4 p-3 text-center h-[170px] w-[150px]`}
    >
      <p>{satPVB} sat/vB</p>
      <p>{rangeSatPVB} sat/vB</p>
      <p>{blockSize} MB</p>
      <p>{transactionsTotal} transactions</p>
      <p>{timeRepresentation}</p>
    </div>
  );
};

export const BlockSlider = ({ blocks }: BlockSliderProps) => {
  const createBlocks = () => {
    return blocks.map((block) => {
      return (
        <Block
          satPVB={block.satPVB}
          rangeSatPVB={block.rangeSatPVB}
          blockSize={block.blockSize}
          transactionsTotal={block.transactionsTotal}
          avgTimeTillMine={block.avgTimeTillMine}
          timeSinceMined={block.timeSinceMined}
          hasBeenMined={block.hasBeenMined}
          blockNumber={block.blockNumber}
        />
      );
    });
  };
  return <div className="flex flex-row">{createBlocks()}</div>;
};
