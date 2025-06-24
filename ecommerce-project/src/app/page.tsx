import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
    </div>
  );
}
