import ProductCard from "@/components/card";
import { getProducts } from "../actions/products.action";
// for  Static Site Generation (SSG)
export const dynamic = "force-static";

async function page() {
  const products = await getProducts();
  return (
    <div className="container mx-auto py-2 px-5 my-20">
      <h1>Product Listing</h1>
      <div className="flex  flex-wrap gap-x-10 gap-y-8 ">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default page;
