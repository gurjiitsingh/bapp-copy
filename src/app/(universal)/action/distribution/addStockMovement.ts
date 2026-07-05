"use server";

import { Transaction } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebaseAdmin";

export type AddStockMovementProps = {
  tx: Transaction;

  movementType:
    | "TRANSFER"
    | "SALE"
    | "RETURN"
    | "ADJUSTMENT";

  productId: string;
  productName: string;
  productMode: "raw_stock" | "finished_stock" | "simple";

  quantity: number;

  fromLocationType: string;
  fromLocationRef: string;

  toLocationType: string;
  toLocationRef: string;

  remarks?: string;

  createdBy?: string;
};

export async function addStockMovement({
  tx,
  movementType,

  productId,
  productName,
  productMode,

  quantity,

  fromLocationType,
  fromLocationRef,

  toLocationType,
  toLocationRef,

  remarks,

  createdBy,
}: AddStockMovementProps) {
  const ref = adminDb.collection("stockMovements").doc();

  tx.set(ref, {
    id: ref.id,

    movementType,

    productId,
    productName,
    productMode,

    quantity,

    fromLocationType,
    fromLocationRef,

    toLocationType,
    toLocationRef,

    remarks: remarks ?? "",

    createdBy: createdBy ?? "system",

    createdAt: Date.now(),
  });
}