"use server";

import { adminDb } from "@/lib/firebaseAdmin";

type LoadVehicleItem = {
  productId: string;
  quantity: number;
};

type LoadVehicleProps = {
  vehicleId: string;
  remarks?: string;
  createdBy?: string;

  items: LoadVehicleItem[];
};

export async function loadVehicle({
  vehicleId,
  remarks,
  createdBy,
  items,
}: LoadVehicleProps) {
  const db = adminDb;

console.log("veh---------------", items)

  try {
    if (!vehicleId) {
      return {
        success: false,
        message: "Vehicle is required",
      };
    }

    if (!items.length) {
      return {
        success: false,
        message: "No products selected",
      };
    }

    await db.runTransaction(async (tx) => {
      // =========================
      // 1. READ
      // =========================

      // Read Factory locations

      // Read Van locations

      // =========================
      // 2. VALIDATE
      // =========================

      // Factory stock >= Load Qty ?

      // =========================
      // 3. WRITE
      // =========================

      // Factory --

      // Van ++

      // Distribution Ledger
    });

    return {
      success: true,
      message: "Vehicle loaded successfully.",
    };
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
}