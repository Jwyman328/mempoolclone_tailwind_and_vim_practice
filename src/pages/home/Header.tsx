import React from "react";

interface TileSelectProps {
  icon: string; // TODO change this from string to an actual icon.
  isSelected: boolean;
}
const TileSelect = ({ icon, isSelected }: TileSelectProps) => {
  const backgroundColor = isSelected ? "bg-purple-300" : "bg-blue-600";
  return <div className={`h-[50px] w-[50] ${backgroundColor}`}>{icon}</div>;
};

const NetworkSelect = () => {
  return (
    <select name="networks">
      <option value="Mainnet">Mainnet</option>
      <option value="Signet">Signet</option>
      <option value="Testnet">Testnet</option>
      <p>Layer 2 Networks</p> {/** TODO fix this it isn't showing right now */}
      <option value="Bisq">Bisq</option>
      <option value="Liquid">Liquid</option>
      <option value="Liquid Testnet">Liquid Testnet</option>
    </select>
  );
};

export const Header = () => {
  return (
    <div className="flex flex-row w-full">
      <div>mempool logo</div>
      <NetworkSelect />
      <TileSelect icon="blocks" isSelected={true} />
      <TileSelect icon="hammer" isSelected={false} />
      <TileSelect icon="light" isSelected={false} />
      <TileSelect icon="charts" isSelected={false} />
      <TileSelect icon="book" isSelected={false} />
      <TileSelect icon="info" isSelected={false} />
      <div className="ml-auto">
        <input
          className="w-30 h-[20px] text-gray-400 bg-gray-800"
          placeholder="Explore the full Bitcoin ecosystem"
        />
        <button className="ml-4 h-[20px] w-[20px] bg-purple-200">
          search icon
        </button>
      </div>
    </div>
  );
};
