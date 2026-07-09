"use client";

type FinanceCardProps = {
  title: string;
  total: number;
  color?: "green" | "red";
  items: {
    label: string;
    value: number;
  }[];
};

export default function FinanceCard({
  title,
  total,
  color = "green",
  items,
}: FinanceCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b p-5">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <div className="divide-y">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between p-4"
          >
            <span className="text-gray-600">{item.label}</span>

            <span className="font-semibold">
              ₹
              {item.value.toLocaleString("en-IN")}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-gray-50 p-5">
        <span className="font-bold">Total</span>

        <span
          className={`text-2xl font-bold ${
            color === "green"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          ₹{total.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
}