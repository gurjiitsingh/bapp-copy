"use server";

import { adminDb } from "@/lib/firebaseAdmin";

export type VehicleType = {
  id: string;

  locationCode: string;
  name: string;
  type: "PICKUP" | "VAN" | "TRUCK";

  responsiblePersonId?: string;
  responsiblePersonName?: string;

  capacity?: number;

  remarks?: string;

  active: boolean;
};

export async function getVehicles(): Promise<VehicleType[]> {
  const data: VehicleType[] = [];

  const snapshot = await adminDb
    .collection("stockLocations")
    .where("active", "==", true)
    .orderBy("name")
    .get();

  snapshot.forEach((doc) => {
    const d = doc.data();

    data.push({
      id: doc.id,

      locationCode: d.locationCode,
      name: d.name,
      type: d.type,

      responsiblePersonId: d.responsiblePersonId,
      responsiblePersonName: d.responsiblePersonName,

      capacity: d.capacity,

      remarks: d.remarks,

      active: d.active,
    });
  });

  return data;
}