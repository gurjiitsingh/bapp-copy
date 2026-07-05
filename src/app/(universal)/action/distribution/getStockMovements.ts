"use server";

import { adminDb } from "@/lib/firebaseAdmin";

export type StockMovementType = {
  id: string;

  movementType: "TRANSFER";

  productId: string;
  productName: string;
  productMode: "raw_stock" | "finished_stock" | "simple";
locationCode:string;
responsiblePersonName:string;
  quantity: number;
name: string;
  fromLocationType: string;
  fromLocationRef: string;
  fromLocationName: string;

  toLocationType: string;
  toLocationRef: string;
  toLocationName: string;

  remarks: string;

  createdBy: string;

  createdAt: number;
};

export async function getStockMovements() {
  try {
    const snapshot = await adminDb
      .collection("stockMovements")
      .orderBy("createdAt", "desc")
      .get();

return snapshot.docs.map((doc) => {
  const data = doc.data();

 

  return {
    id: doc.id,
    ...data,
  } as StockMovementType;
});
  } catch (error) {
    console.error(error);
    return [];
  }
}