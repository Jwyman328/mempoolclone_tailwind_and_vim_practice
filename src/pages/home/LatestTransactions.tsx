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
export const LatestTransactionTable = () => {
  const rows = mocksTransactionData.map((txInfo) => {
    return (
      <LatestTransactionInfo
        amount={txInfo.amount}
        txid={txInfo.txid}
        usd={txInfo.usd}
        fee={txInfo.fee}
      />
    );
  });
  return (
    <div className="flex flex-col flex-1 bg-slate-800 mt-7 p-8">
      <p className="text-blue-400 text-center mb-2">Latest Transactions</p>
      <div className="flex flex-row items-between justify-between">
        <p className="text-white">TXID</p>
        <p className="text-white">Amount</p>
        <p className="text-white">USD</p>
        <p className="text-white">Fee</p>
      </div>
      {rows}
    </div>
  );
};
interface LatestTransactionInfoProps {
  txid: string;
  amount: string;
  usd: string;
  fee: string;
}
const LatestTransactionInfo = ({
  txid,
  amount,
  usd,
  fee,
}: LatestTransactionInfoProps) => {
  return (
    <div className="flex flex-row justify-between mt-2">
      <p className="text-blue-300 mb-2 w-[75px] text-ellipsis">{txid}</p>
      <p className="text-white mb-2">{fee}</p>
      <p className="text-green-600 mb-2">{usd}</p>
      <p className="text-white">{amount}</p>
    </div>
  );
};
