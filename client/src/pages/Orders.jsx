import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { url } from "../api/constants";
import axios from "axios";
import {
  getOrder,
  getOrderSuccess,
  addOrdersDetail,
} from "../redux/orderSlice";

import SingleProductCart from "../components/SingleProductCart";

const Orders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders, ordersDetail, isRemoveSuccess } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getOrder());

    const fetchData = async () => {
      if (user) {
        let ordersDetail = [];
        await Promise.all(
          orders.orderDetailsByOrderId.map(async (item) => {
            const product = await axios.get(`${url}/product/${item.productId}`);
            ordersDetail = ordersDetail.concat(product.data);
          })
        );

        dispatch(addOrdersDetail(ordersDetail));
      }
    };

    fetchData();
  }, [orders]);

  return (
    <div className="relative mt-[100px]">
      <div className="px-10 min-h-[40vh]">
        {orders && orders?.orderDetailsByOrderId?.length === 0 ? (
          <div className="py-4 flex flex-col items-center justify-center">
            <div className="w-full py-4 flex flex-row items-center justify-center bg-red-200">
              <div className="text-textColor font-medium pr-6">
                Giỏ hàng của bạn trống
              </div>
              <Link
                to={"/"}
                className="px-8 py-3 bg-primaryColor text-white rounded-lg"
              >
                Shopping now
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full py-4 flex flex-row items-center justify-center bg-red-200">
              <div className="text-textColor font-medium pr-6">
                Số lượng trong giỏ hàng
                <span> ({orders?.orderDetailsByOrderId?.length})</span>
              </div>
            </div>
            <ul className="w-full">
              {ordersDetail &&
                ordersDetail.map((item, key) => (
                  <div key={key}>
                    <SingleProductCart item={item} />
                  </div>
                ))}
            </ul>
            <div className="mb-4 flex flex-row items-center justify-end">
              <button className="px-4 py-2 bg-primaryColor rounded-lg text-white font-semibold">
                Thanh toán
              </button>
            </div>
          </div>
        )}
      </div>

      {isRemoveSuccess && (
        <motion.div
          initial={{ opacity: 0.5, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.7 }}
          className="fixed top-20 right-8 z-[10000] px-4 py-2 rounded-lg bg-red-500 text-white text-lg font-medium"
        >
          Xóa thành công
        </motion.div>
      )}
    </div>
  );
};

export default Orders;
