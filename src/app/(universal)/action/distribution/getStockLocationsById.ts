"use server";

import { adminDb } from "@/lib/firebaseAdmin";
import { StockLocationType } from "@/lib/types/distribution/StockLocationType";

export async function getStockLocationById(
  id: string
): Promise<StockLocationType | null> {

 
  try {
    const doc = await adminDb
      .collection("stockLocations")
      .doc(id)
      .get();

    if (!doc.exists) {
      return null;
    }
 
    return doc.data() as StockLocationType;
  } catch (error) {
    console.error("❌ getStockLocationById:", error);
    return null;
  }
}