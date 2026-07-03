"use client";

import DriverHeader from "./components/DriverHeader";
import HomeCards from "./components/HomeCards";

 

type Props = {
  userName: string;
};

export default function DriverDashboard({
  userName,
}: Props) {
  return (
    <main className="min-h-screen bg-slate-100">
      <DriverHeader userName={userName} />

      <div className="max-w-md mx-auto px-4 py-6">
        <HomeCards />
      </div>
    </main>
  );
}