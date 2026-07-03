"use client";

import { ShoppingCart, RotateCcw } from "lucide-react";

export default function HomeCards() {
  return (
    <div className="space-y-5">

      <button
        className="w-full bg-white rounded-3xl shadow-sm border border-slate-100 p-6 text-left active:scale-[0.98] transition"
      >
        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4">
          <ShoppingCart className="text-green-700" />
        </div>

        <h2 className="text-xl font-bold">
          Sales
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Create customer invoices
        </p>
      </button>

      <button
        className="w-full bg-white rounded-3xl shadow-sm border border-slate-100 p-6 text-left active:scale-[0.98] transition"
      >
        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
          <RotateCcw className="text-orange-700" />
        </div>

        <h2 className="text-xl font-bold">
          Customer Returns
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Receive returned products
        </p>
      </button>

    </div>
  );
}