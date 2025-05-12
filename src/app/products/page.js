import { getProducts } from "@/actions/products.action";
import ProductShowCase from "@/components/product_show_case";

export const dynamic = "force-static";

export default async function ProductPage() {
  const products = await getProducts();

  return <ProductShowCase initialProducts={products} />;
}

// Ensure static generation
export async function generateStaticParams() {
  const products = await getProducts();
  return products;
}
