export const MoreInfoFooter = () => {
  return (
    <div className="flex flex-row bg-slate-800 mt-12 p-20">
      <div className="flex flex-col text-center items-center flex-1">
        <p className="text-white">
          The mempool Open Source Project <span>TM</span>
        </p>
        {/** select dropdown for language */}
        {/** select dropdown for currency */}
        <p className="text-gray-500">broadcast transaction</p>
        <p className="text-gray-500">Connect to our Nodes</p>
        <p className="text-gray-500">
          About The Mempool Open Source Project <span>TM</span>
        </p>
      </div>
      <div className="flex bg-slate-800 flex-col flex-1">
        <div className="flex flex-row flex-1 space-evenly w-full relative">
          <LinksInfoSection
            items={[
              "Mining Dashboard",
              "Lighting Dashboard",
              "Recent Blocks",
              "API Documentation",
            ]}
          />
          <LinksInfoSection
            items={[
              "Learn",
              "What is a mempool",
              "What is a mempool explorer",
              "Why isn't my transaction confirming?",
              "More FAQs",
            ]}
          />
        </div>

        <div className="flex flex-row flex-1">
          <LinksInfoSection
            items={[
              "More Networks",
              "Testnet Explorer",
              "Signal Explorer",
              "Liquid Explorer",
              "Bisq Explorer",
            ]}
          />
          <LinksInfoSection
            items={[
              "Legal",
              "Terms of Service",
              "Privacy Policy",
              "Trademark Policy",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const LinksInfoSection = ({ items }: { items: string[] }) => {
  const FirstItem = () => {
    return <p className="text-blue-900">{items[0]}</p>;
  };
  const otherItems = () => {
    return items.map((item) => {
      return <p className="text-gray-400">{item}</p>;
    });
  };

  return (
    <div className="flex flex-col flex-1">
      <FirstItem />
      {otherItems()}
    </div>
  );
};
