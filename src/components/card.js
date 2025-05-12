// 'use client";';
import { StarRating } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ title, price, image, description, rating, id }) => {

  return (
    <Link href={`/product/${id}`} >
      <div className="flex flex-col bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0)]  shadow-gray-400/50 w-80 lg:w-70 xl:w-70 2xl:w-86 mb-2">
        <div className="p-5 text-center">
          <h2 className="text-lg font-bold mb-3 text-[#0E0E0E] truncate">
            {title}
          </h2>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="mx-auto h-36 sm:h-40 lg:h-44 w-[80%] sm:w-[70%] object-cover rounded-xl"
          />
        </div>
        <div className={`bg-blue-200 text-white pt-3 pb-6 rounded-2xl flex-1`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0E42FD] mb-2">
              Rs {price}
            </h3>
            <div className="mb-2">
              <StarRating rate={rating.rate} />
            </div>

            <p className="text-sm text-[#0E0E0E] line-clamp-3 w-[80%] mx-auto">
              {description.length > 120
                ? description.substring(0, 120) + "..."
                : description}
            </p>
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
