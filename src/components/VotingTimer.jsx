import React from "react";
import Countdown from "react-countdown-now";

const Completionist = () => <span className="text-[20px] font-semibold ">TIME UP!</span>;

const renderer = ({ total, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <div className=" flex flex-row gap-2" style={{ color: "Black" }}>
        <span className="text-[20px]  font-semibold "> Only </span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[20px] bg-gradient-to-r from-[#4327a3] to-[#dd117f] text-transparent bg-clip-text font-bold ">{minutes}</span>
        </div>
        <span className="text-[20px]  font-semibold "> minutes </span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[20px] bg-gradient-to-r from-[#4327a3] to-[#dd117f] text-transparent bg-clip-text font-bold ">{seconds}</span>
        </div>
        <span className="text-[20px] font-semibold "> seconds left </span>
      </div>
    );
  } else {
    return <Completionist />;
  }
};

const VotingTimer = () => {
  return (
    <div className="App">
      <Countdown date="2023-09-15T10:00:00" renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default VotingTimer;
