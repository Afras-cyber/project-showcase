import Banner from "@/components/banner";
import ProductList from "@/components/ProductList";
import React from "react";

function Home() {
  return (
    <div className="flex-1">
      <Banner />
      <section className=" container mx-auto py-2 px-5 mt-10 mb-18">
          <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-10 w-max">
              <ProductList  />
            </div>
          </div>
        </section>
    </div>
  );
}

export default Home;
