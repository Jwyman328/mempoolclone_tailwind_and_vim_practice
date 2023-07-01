import {
  ConnectivityRankingsTableRow,
  LiquidityRankingsTableRow,
} from "../pages/lightening/tables";

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

export const getConnectivityData = async () => {
  return connectivityRanksData;
};

export const getLuquidityRankingsData = async () => {
  return liquidityRanksData;
};
