import { getProducts } from "@/actions/products.action";
import ProductCard from "./card";
import ProductSkeleton from "./product_skeleton";
import { Suspense } from "react";

export const dynamic = "force-static";
// for Static Site Generation (SSG)

const ProductListSkeleton = () => (
  <section className=" container mx-auto py-2 px-5 mt-10 mb-18">
    <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex space-x-10 w-max">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  </section>
);

const ProductLoader = async () => {
  try {
    const products = await getProducts();

    if (!products || products.length === 0) {
      return (
        <div className="text-center text-gray-500">
          {!products ? "Failed to load products" : "No products available"}
        </div>
      );
    }
    return (
      <section className=" container mx-auto py-2 px-5 mt-10 mb-18">
        <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-10 w-max">
            {products?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
    // hide component if there is an error
    return <></>;
  }
};
const ProductList = () => {
  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ProductLoader />
    </Suspense>
  );
};

export default ProductList;
