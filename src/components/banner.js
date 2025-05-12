import { StarRating } from '@/lib/service';
import Link from 'next/link';
import React from 'react'

function Banner() {
  return (
    <div className="bg-gradient-to-r from-amber-100 to-amber-200 mt-14">
    <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col justify-center items-start space-y-6 order-2 md:order-1">
     
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover Quality Products
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Explore our curated selection of premium items at unbeatable
          prices, with free shipping on all orders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link href="/products" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium shadow-md">
            Shop Now
          </Link>
        </div>
        <div className="flex items-center space-x-4 pt-2">
          <span className="flex items-center text-sm gap-1">
            <StarRating rate={4.9} />
            <span className="ml-2 text-gray-600">
              4.9/5 (2.5k+ reviews)
            </span>
          </span>
        </div>
      </div>

      <div className="relative flex justify-center items-center order-1 md:order-2">
        <div className="absolute w-64 h-64 bg-blue-100 rounded-full opacity-70 filter blur-xl"></div>
        <div className="relative">
          <img
            src="/images/hero.png"
            alt="Featured Products"
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-500 "
          />
          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Limited Time Offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner