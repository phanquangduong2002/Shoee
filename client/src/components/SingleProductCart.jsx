import React from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { url } from "../api/constants";

import { IncreaseIcon, DecreaseIcon, TrashIcon } from "../assets";
import {
  getOrder,
  getOrderSuccess,
  addSuccess,
  removeSuccess,
} from "../redux/orderSlice";

const SingleProductCart = ({ item }) => {
  const { orders, isSuccess } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleDeleteProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `${url}/order/${user.userId}/products/${item.productId}`
      );
      const resOrder = await axios.get(`${url}/order/${user.userId}`);

      dispatch(getOrderSuccess(resOrder.data));

      dispatch(removeSuccess(true));

      setTimeout(() => {
        dispatch(removeSuccess(false));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(item);
  return (
    <div className="pl-24 py-4 mb-6 flex flex-row items-center justify-between border-b-[1px] border-[#ccc]">
      <div>
        <img src={item?.productImage} className="w-[140px]" alt="" />
      </div>
      <div className="flex-1 px-10 font-semibold">{item?.productName}</div>
      <div className="px-14">
        <span>Số lượng</span>
        <div>
          {/* <button className="pr-2">
            <DecreaseIcon />
          </button> */}
          <span className="px-2">
            {item?.orderDetailsByProductId.map((e) => {
              if (e.orderId === orders.orderId) return e.quantityOrder;
            })}
          </span>
          {/* <button className="pl-2">
            <IncreaseIcon />
          </button> */}
        </div>
      </div>
      <div className="flex flex-col px-14">
        <span>Tổng</span>
        <span>
          {item?.orderDetailsByProductId.map((e) => {
            if (e.orderId === orders.orderId)
              return e.total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              });
          })}
        </span>
      </div>
      <div className="px-14">
        <button onClick={handleDeleteProduct}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default SingleProductCart;
