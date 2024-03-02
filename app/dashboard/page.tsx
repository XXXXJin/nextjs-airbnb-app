import React from "react";
import Card from "@/app/ui/dashboard/Card";
import Transactions from "@/app/ui/dashboard/Transactions";
import Chart from "@/app/ui/dashboard/Chart";
import RightBar from "@/app/ui/dashboard/RightBar";

export default function Dashboard() {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3]">
        <div className="flex gap-5">
          <div className="flex-1">
            <Card />
          </div>
          <div className="flex-1">
            <Card />
          </div>
          <div className="flex-1">
            <Card />
          </div>
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-[1]">
        <RightBar />
      </div>
    </div>
  );
}
