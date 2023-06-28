export interface LatestTransactionInfoProps {
  txid: string;
  amount: string;
  usd: string;
  fee: string;
}
export const getLatestTransactionData = async (): Promise<
  LatestTransactionInfoProps[]
> => {
  const mocksTransactionData = [
    {
      txid: "flsjdklf...jkasdfj",
      amount: ".00045",
      usd: "$123.54",
      fee: "20.1sat/vB",
    },
    {
      txid: "flsjdklf...jkasdfj",
      amount: ".00045",
      usd: "$123.54",
      fee: "20.1sat/vB",
    },
    {
      txid: "flsjdklf...jkasdfj",
      amount: ".00045",
      usd: "$123.54",
      fee: "20.1sat/vB",
    },
    {
      txid: "flsjdklf...jkasdfj",
      amount: ".00045",
      usd: "$123.54",
      fee: "20.1sat/vB",
    },
    {
      txid: "flsjdklf...jkasdfj",
      amount: ".00045",
      usd: "$123.54",
      fee: "20.1sat/vB",
    },
  ];
  return mocksTransactionData;
};
