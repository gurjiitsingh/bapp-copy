import { getStockLocation } from "../../action/distribution/getStockLocation";
import { getStockLocationsAll } from "../../action/distribution/getStockLocationsAll";
import StockLocationView from "./components/StockLocationView";


export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    locationType?: "FACTORY" | "VAN" | "WAREHOUSE";
    locationRef?: string;
  }>;
}) {
  const { locationType, locationRef } = await searchParams;

  const stockLocations = await getStockLocationsAll({
    locationType,
    locationRef,
  });

  return (
    <StockLocationView
      stockLocations={stockLocations}
      selectedLocation={locationType}
    />
  );
}