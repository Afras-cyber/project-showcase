import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const StarRating = ({ rate }) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex justify-center items-center space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rate})</span>
    </div>
  );
};
