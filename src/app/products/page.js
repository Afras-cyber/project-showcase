// import ProductCard from "@/components/card";
// import { getProducts } from "../../actions/products.action";
// // for  Static Site Generation (SSG)
// export const dynamic = "force-static";

// async function page() {
//   const products = await getProducts();
//   return (
//     <div className="container mx-auto py-2 px-5 my-20">
//       <h1 className="text-3xl font-bold mb-2">Product Listing</h1>
//       <div className="flex flex-wrap md:gap-x-10 gap-y-8 justify-center md:justify-start">
//         {products.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default page;

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
