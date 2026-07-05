"use server";

import { adminDb } from "@/lib/firebaseAdmin";
import { revalidatePath, revalidateTag } from "next/cache";

export type AddVehicleType = {
  vehicleNo: string;
  name: string;

  type: "PICKUP" | "VAN" | "TRUCK";

  driverId?: string;

  capacity?: number;

  remarks?: string;
};

export async function addVehicle({
  vehicleNo,
  name,
  type,
  driverId,
  capacity,
  remarks,
}: AddVehicleType) {
  try {
    if (!vehicleNo.trim()) {
      return {
        success: false,
        message: "Vehicle number is required.",
      };
    }

    if (!name.trim()) {
      return {
        success: false,
        message: "Vehicle name is required.",
      };
    }

    const existing = await adminDb
      .collection("vehicles")
      .where("vehicleNo", "==", vehicleNo.trim().toUpperCase())
      .limit(1)
      .get();

    if (!existing.empty) {
      return {
        success: false,
        message: "Vehicle already exists.",
      };
    }

    const ref = adminDb.collection("vehicles").doc();

    await ref.set({
      id: ref.id,

      vehicleNo: vehicleNo.trim().toUpperCase(),
      name: name.trim(),

      type,

      driverId: driverId || "",

      capacity: capacity || 0,

      remarks: remarks || "",

      active: true,

      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    revalidateTag("vehicles","max");

    revalidatePath("/admin/distribution/vehicles");

    return {
      success: true,
      message: "Vehicle added successfully.",
    };
  } catch (error: any) {
    console.error("❌ addVehicle:", error);

    return {
      success: false,
      message: error.message || "Failed to add vehicle.",
    };
  }
}