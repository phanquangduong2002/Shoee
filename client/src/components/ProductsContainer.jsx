import React, { useState } from "react";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import SingleProduct from "./SingleProduct";

import Loading from "../assets/images/commingsoon.gif";
const ProductsContainer = () => {
  const { products, isLoading } = useSelector((state) => state.product);

  return (
    <div className="px-10 mt-4">
      <h2 className="text-xl font-semibold text-primaryColor uppercase">
        Sản phẩm của chúng tôi:
      </h2>

      <div className="flex flex-row flex-wrap -mx-4 mt-4">
        {products && products?.length >= 1 ? (
          <>
            {isLoading ? (
              <div className="w-full flex flex-row items-center justify-center">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primaryColor border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            ) : (
              products.map((item, key) => (
                <div key={key} className="w-[25%] px-4 mb-6">
                  <SingleProduct item={item} />
                </div>
              ))
            )}
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <img src={Loading} className="w-[300px]" alt="" />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="text-primaryColor text-xl font-semibold"
            >
              Đang tải, vui lòng đợi...
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
