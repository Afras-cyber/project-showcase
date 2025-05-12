import Banner from "@/components/banner";
import ProductList from "@/components/product_list";
import React from "react";

function Home() {
  return (
    <div className="flex-1">
      <Banner />
      <ProductList />
    </div>
  );
}

export default Home;
