import React, { useState, useEffect } from "react";
import {
  LatestTransactionInfoProps,
  getLatestTransactionData,
} from "../../api/transaction";

export const LatestTransactionTable = () => {
  const [transactionData, setTransactionData] = useState<
    LatestTransactionInfoProps[]
  >([]);
  const getTransactionData = async () => {
    const fetchedData = await getLatestTransactionData();
    setTransactionData(fetchedData);
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  const rows = transactionData?.map((txInfo) => {
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
