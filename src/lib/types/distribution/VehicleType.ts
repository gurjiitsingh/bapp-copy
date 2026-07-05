export type VehicleType = {
  id: string;

  vehicleNo: string;      // PB10AB1234
  name: string;           // Pickup, Tata Ace, Bolero

  type: "PICKUP" | "VAN" | "TRUCK";

  driverId?: string;      // Employee ID
  driverName?: string;    // Snapshot

  active: boolean;

  remarks?: string;

  createdAt: number;
  updatedAt: number;
};