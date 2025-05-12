import { getProductById } from "@/actions/products.action";
import { StarRating } from "@/lib/service";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"; // for Server Side Rendering (SSR)
export const revalidate = 0; // for Server Side Rendering (SSR)

async function page({ params }) {
  const id = params?.id;

  const products = await getProductById(id);
  if (!products) {
    return notFound();
  }
  return (
    <div className="container mx-auto py-2 px-5 my-20 min-h-screen">
      <div className="rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0)]  shadow-gray-400/50 w-full py-3  md:py-6 px-4 md:px-10 bg-blue-50/55 my-2 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="w-full col-span-2">
            <Image
              src={products.image}
              alt={products.title}
              width={500}
              height={500}
              className="w-auto md:w-8/12 h-auto md:h-auto object-fit m-auto "
            />
          </div>
          <div className="flex flex-col justify-start items-start p-5 md:col-span-3 ">
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              {products.title}
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              {products.description}
            </p>

            <div className="my-2">
              <h3 className="text-lg font-semibold">Category:</h3>
              <p className="text-gray-600 capitalize">{products.category}</p>
            </div>
            <div className="my-2">
              <h3 className="text-lg font-semibold">Rating:</h3>
              <StarRating rate={products.rating.rate} />
              <p className="text-gray-600">{products.rating.count} reviews</p>
            </div>

            <h2 className="text-4xl font-extrabold text-blue-600 my-4">
              Rs {products.price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
