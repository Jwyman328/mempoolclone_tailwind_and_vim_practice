import { BlockProps } from "../pages/home/BlockSlider";

export const getBlockData = async (): Promise<BlockProps[]> => {
  const mockBlocks = [
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      timeSinceMined: "10",
      hasBeenMined: true,
      blockNumber: "12343254",
    },
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      timeSinceMined: "130",
      hasBeenMined: true,
      blockNumber: "12343255",
    },
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      timeSinceMined: "1",
      hasBeenMined: true,
      blockNumber: "12343255",
    },
  ];
  return mockBlocks;
};

export const getPotentialBlocks = async (): Promise<BlockProps[]> => {
  const mockPotentialBlocks = [
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      avgTimeTillMine: "1",
      hasBeenMined: false,
    },
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      avgTimeTillMine: "10",
      hasBeenMined: false,
    },
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      avgTimeTillMine: "10",
      hasBeenMined: false,
    },
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      avgTimeTillMine: "100",
      hasBeenMined: false,
    },
    {
      satPVB: "10",
      rangeSatPVB: "10-20",
      blockSize: "2.23",
      transactionsTotal: "3,434",
      avgTimeTillMine: "130",
      hasBeenMined: false,
    },
  ];
  return mockPotentialBlocks;
};

export interface LatestBlockMiningInfoProps {
  height: string;
  pool: string;
  txs: string;
  size: string;
}

const latestBlockInfoMockData: LatestBlockMiningInfoProps[] = [
  { height: "765432", pool: "Antpool", txs: "3,508", size: "2.08 MB" },
  { height: "765432", pool: "Antpool", txs: "3,508", size: "2.08 MB" },
  { height: "765432", pool: "Antpool", txs: "3,508", size: "2.08 MB" },
  { height: "765432", pool: "Antpool", txs: "3,508", size: "2.08 MB" },
  { height: "765432", pool: "Antpool", txs: "3,508", size: "2.08 MB" },
];
export const getLatestMiningBlockInfo = async () => {
  return latestBlockInfoMockData;
};
