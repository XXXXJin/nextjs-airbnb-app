import React from "react";
import Card from "@/app/ui/dashboard/Card";
import Transactions from "@/app/ui/dashboard/Transactions";
import Chart from "@/app/ui/dashboard/Chart";

export default function Dashboard() {
  return (
    <div className="gap-5 mt-5">
      <div>
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
    </div>
  );
}
