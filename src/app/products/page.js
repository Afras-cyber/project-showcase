import { getProducts } from "@/actions/products.action";
import ProductShowCase from "@/components/product_show_case";

export const dynamic = "force-static"; // for Static Site Generation (SSG)

export const metadata = {
  title: "Products | Ahamed Afras",
  description: "This is my Mini Product Showcase website",
};

export default async function ProductPage() {
  const products = await getProducts();

  return <ProductShowCase initialProducts={products} />;
}

// for Static Site Generation (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products;
}
