import React from "react";
import { PiSneaker } from "react-icons/pi"
export default function NoResults() {
  return (
    <div className="w-full text-3xl font-semibold flex justify-center items-center flex-col border border-red-400 p-20">
      <span>No Results</span>
        <PiSneaker />
    </div>
  );
}
