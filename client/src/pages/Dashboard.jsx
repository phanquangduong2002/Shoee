import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate, Navigate } from "react-router-dom";

import { url } from "../api/constants";

import axios from "axios";

import { getProducts, getProductsSuccess } from "../redux/productSlice";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [error, setError] = useState(false);

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productName || !productImage || !productPrice) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      try {
        const res = await axios.post(`${url}/product`, {
          userId: Number(user.userId),
          product: {
            productName,
            productImage,
            productPrice: Number(productPrice),
          },
        });

        setSuccess(true);
        setProductName("");
        setProductImage("");
        setProductPrice("");
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        const resProduct = await axios.get(`${url}/product`);
        dispatch(getProductsSuccess(resProduct.data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!user?.isAdmin) return <Navigate to="/" />;

  return (
    <div className="mt-[71px] flex flex-row items-center justify-center py-20">
      <div className="w-[50vw] border-[1px] border-[#ccc] rounded-lg p-4">
        {error && (
          <div className="w-full text-center bg-primaryColor rounded-lg px-4 py-2 text-white font-medium mb-3">
            Nhập đầy đủ thông tin sản phẩm
          </div>
        )}
        {success && (
          <div className="w-full text-center bg-green-400 rounded-lg px-4 py-2 text-white font-medium mb-3">
            Thêm sản phẩm thành công
          </div>
        )}
        <form action="" className=" flex flex-col">
          <label htmlFor="productName" className="w-full mb-4">
            <div className="text-lg font-semibold mb-3">Tên sản phẩm:</div>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Tên sản phẩm"
              className="w-full border-[1px] border-[#ccc] rounded-lg px-2 py-1 outline-none"
            />
          </label>
          <label htmlFor="productImage" className="w-full mb-4">
            <div className="text-lg font-semibold mb-3">Ảnh:</div>
            <input
              type="text"
              id="productImage"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              placeholder="Url ảnh sản phẩm"
              className="w-full border-[1px] border-[#ccc] rounded-lg px-2 py-1 outline-none"
            />
          </label>
          <label htmlFor="productPrice" className="w-full mb-4">
            <div className="text-lg font-semibold mb-3">Giá:</div>
            <input
              type="text"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Giá sản phẩm"
              className="w-full border-[1px] border-[#ccc] rounded-lg px-2 py-1 outline-none"
            />
          </label>
          <div className="flex flex-row justify-end">
            <button
              onClick={handleAddProduct}
              className="w-[120px] px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-150 ease-in-out"
            >
              THÊM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
