import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { HeartIcon, QuickViewIcon } from "../assets";

import { url } from "../api/constants";
import { addSuccess } from "../redux/orderSlice";

import { getOrder, getOrderSuccess } from "../redux/orderSlice";

const SingleProduct = ({ item }) => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formattedNumber = item?.productPrice.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!user) return navigate("/login");

    try {
      const res = await axios.post(`${url}/order/${user.userId}/products`, {
        productId: item.productId,
        quantity: 1,
      });

      const resOrder = await axios.get(`${url}/order/${user.userId}`);

      dispatch(getOrderSuccess(resOrder.data));

      dispatch(addSuccess(true));

      setTimeout(() => {
        dispatch(addSuccess(false));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div className="group min-h-[380px] text-center border-[1px] border-[#ccc] rounded-md overflow-hidden cursor-pointer relative">
        <div className="w-full">
          <div className="w-full">
            <img
              src={item.productImage}
              className="w-full h-[275px] object-contain object-center"
              alt=""
            />
          </div>
          <div className="py-1 text-lg text-textColor font-medium mt-2">
            {item.productName}
          </div>
          <div className="py-1 text-base text-primaryColor font-medium">
            {formattedNumber}
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-[1] transition-all duration-150 ease-in-out">
          <div className="h-full flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center absolute top-4 right-4">
              <span className="bg-white shadow-md p-2 rounded-full mb-1">
                <HeartIcon />
              </span>
              <span className="bg-white shadow-md p-2 rounded-full mt-1">
                <QuickViewIcon />
              </span>
            </div>
            <button
              onClick={handleAddProduct}
              className="p-2 bg-[rgba(245,55,55,0.8)] text-white text-sm rounded-full border-primaryColor border-[1px] hover:bg-primaryColor transition-all duration-150 ease-in-out"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
