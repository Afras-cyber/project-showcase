import { getProductById } from "@/app/actions/products.action";
import Image from "next/image";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic"; // for Server Side Rendering (SSR)

async function page({ params }) {
  const id = params?.id;

  const products = await getProductById(id);
  if (!products) {
    return notFound();
  }
  return (
    <div className="container mx-auto py-2 px-5 my-20 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="w-full col-span-2">
          <Image
            src={products.image}
            alt={products.title}
            width={500}
            height={500}
            className="w-8/12 h-auto object-fit"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-5 md:col-span-3">
          <h1 className="text-3xl font-bold mb-2">{products.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{products.description}</p>

          <div className="my-2">
            <h3 className="text-lg font-semibold">Category:</h3>
            <p className="text-gray-600">{products.category}</p>
          </div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Rs {products.price}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default page;
