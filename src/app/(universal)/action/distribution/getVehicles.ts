"use server";

import { adminDb } from "@/lib/firebaseAdmin";

export type VehicleType = {
  id: string;

  vehicleNo: string;
  name: string;
  type: "PICKUP" | "VAN" | "TRUCK";

  driverId?: string;
  driverName?: string;

  capacity?: number;

  remarks?: string;

  active: boolean;
};

export async function getVehicles(): Promise<VehicleType[]> {
  const data: VehicleType[] = [];

  const snapshot = await adminDb
    .collection("vehicles")
    .where("active", "==", true)
    .orderBy("name")
    .get();

  snapshot.forEach((doc) => {
    const d = doc.data();

    data.push({
      id: doc.id,

      vehicleNo: d.vehicleNo,
      name: d.name,
      type: d.type,

      driverId: d.driverId,
      driverName: d.driverName,

      capacity: d.capacity,

      remarks: d.remarks,

      active: d.active,
    });
  });

  return data;
}