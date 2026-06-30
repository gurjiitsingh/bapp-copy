
import ProductionForm from "../components/ProductionForm";
import { fetchProductsStock } from "@/app/(universal)/action/products/productsStock";

export default async function Page() {
  const products = await fetchProductsStock();

  return (
    <ProductionForm
      products={products}
    />
  );
}