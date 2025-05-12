"use client";

import { useState, useMemo } from "react";

import ProductCard from "@/components/card";

export default function ProductList({ initialProducts }) {
  // State for filters and mobile filter menu
  const [filters, setFilters] = useState({
    category: "",
    minRating: "",
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const categoryMatch =
        !filters.category ||
        product.category.toLowerCase() === filters.category.toLowerCase();

      const minRatingMatch =
        !filters.minRating ||
        product.rating.rate >= parseFloat(filters.minRating);

      return categoryMatch && minRatingMatch;
    });
  }, [initialProducts, filters]);

  // Get unique categories
  const categories = [
    ...new Set(initialProducts.map((product) => product.category)),
  ];

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      category: "",
      minRating: "",
    });
    setIsMobileFilterOpen(false);
  };

  // Render filter inputs
  const FilterInputs = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
      {/* Category Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category} className="capitalize">
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Rating Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Minimum Rating
        </label>
        <select
          name="minRating"
          value={filters.minRating}
          onChange={handleFilterChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Ratings</option>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}+ Stars
            </option>
          ))}
        </select>
      </div>
      <div className="hidden  space-y-2 lg:flex justify-start items-end">
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4 mt-16">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center justify-center w-full py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
        >
          {isMobileFilterOpen ? <>Close Filters</> : <>Open Filters</>}
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-gray-600"
              >
                x
              </button>
            </div>

            <FilterInputs />

            <div className="mt-4 flex space-x-4">
              <button
                onClick={resetFilters}
                className="w-full py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden lg:block mb-6">
        <FilterInputs />
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap md:gap-x-10 gap-y-8 justify-center md:justify-start">
      {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              No products found matching the selected filters.
            </p>
          </div>
        )}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      </div> */}
    </div>
  );
}
