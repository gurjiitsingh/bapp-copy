import { getCustomerBusinessSummary } from "@/app/(universal)/action/businessData/getCustomerBusinessSummary";
import { fetchBusinessSummary } from "../../../action/businessData/fetchBusinessSummary";
import Dashboard from "./Dashboard";

export default async function Page() {
  const [businessResult, customerResult] = await Promise.all([
    fetchBusinessSummary(),
    getCustomerBusinessSummary(),
  ]);

  if (!businessResult.success || !businessResult.data) {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
          {businessResult.message || "Failed to load business summary."}
        </div>
      </div>
    );
  }

  if (!customerResult.success || !customerResult.data) {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
          {customerResult.message || "Failed to load customer summary."}
        </div>
      </div>
    );
  }

  return (
    <Dashboard
      summary={businessResult.data}
      customerSummary={customerResult.data}
    />
  );
}