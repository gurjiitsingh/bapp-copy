"use client";

import FinanceCard from "./FinanceCard";

type BusinessSummary = {
  rawMaterialValue: number;
  finishedProductValue: number;
  customerDue: number;
  supplierDue: number;
  cashInHand: number;
};

type CustomerSummary = {
  amountToReceive: number;
  amountToPay: number;
};

export default function Dashboard({
  summary,
  customerSummary,
}: {
  summary: BusinessSummary;
  customerSummary: CustomerSummary;
}) {
  const totalAssets =
    summary.rawMaterialValue +
    summary.finishedProductValue +
    summary.cashInHand +
    customerSummary.amountToReceive;

  const totalPayable =
    summary.supplierDue +
    customerSummary.amountToPay;

  return (
    <div className="space-y-8">

      {/* Financial Overview */}
      <div className="grid gap-6 lg:grid-cols-2">

        <FinanceCard
          title="Business Assets"
          total={totalAssets}
          color="green"
          items={[
            {
              label: "Raw Material",
              value: summary.rawMaterialValue,
            },
            {
              label: "Finished Stock",
              value: summary.finishedProductValue,
            },
            {
              label: "Customer Receivable",
              value: customerSummary.amountToReceive,
            },
            {
              label: "Cash In Hand",
              value: summary.cashInHand,
            },
          ]}
        />

        <FinanceCard
          title="Business Liabilities"
          total={totalPayable}
          color="red"
          items={[
            {
              label: "Supplier Due",
              value: summary.supplierDue,
            },
            {
              label: "Customer Credit",
              value: customerSummary.amountToPay,
            },
            {
              label: "Expense Due",
              value: 0,
            },
            {
              label: "Loans",
              value: 0,
            },
          ]}
        />

      </div>

    </div>
  );
}