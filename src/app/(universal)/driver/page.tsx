import { auth } from "@/auth";
import DriverDashboard from "./DriverDashboard";

export default async function DriverPage() {
  const session = await auth();

  return (
    <DriverDashboard
      userName={session?.user?.name || "Driver"}
    />
  );
}