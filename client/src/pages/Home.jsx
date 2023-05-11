import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import { url } from "../api/constants";

import { getProducts, getProductsSuccess } from "../redux/productSlice";
import { getOrder, getOrderSuccess } from "../redux/orderSlice";

import Banner from "../components/Banner";
import ProductsContainer from "../components/ProductsContainer";
import Search from "../components/Search";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const { orders, isAddSuccess } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getOrder());

    const fetchData = async () => {
      const resProduct = await axios.get(`${url}/product`);

      if (user) {
        const resOrder = await axios.get(`${url}/order/${user.userId}`);
        if (resOrder.data) {
          dispatch(getOrderSuccess(resOrder.data));
        }
      }
      if (resProduct.data) {
        dispatch(getProductsSuccess(resProduct.data));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative mt-[71px]">
      <Banner />
      <Search />
      <ProductsContainer />
      {isAddSuccess && (
        <motion.div
          initial={{ opacity: 0.5, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.7 }}
          className="fixed top-20 right-8 z-[10000] px-4 py-2 rounded-lg bg-green-500 text-white text-lg font-medium"
        >
          Thêm thành công
        </motion.div>
      )}
    </div>
  );
};

export default Home;
