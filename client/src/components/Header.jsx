import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../redux/userSlice";

import { UserIcon, CartIcon, LogoutIcon, AddIcon } from "../assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { orders, ordersDetail } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  console.log(orders);

  const handleLogout = () => {
    setIsOpen(false);
    dispatch(logout());
  };
  return (
    <header className="py-4 mb-0 border-b fixed top-0 left-0 w-full z-[99999] bg-white">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="
        text-3xl font-bold text-rose-500 first-letter:uppercase 
        hover:text-rose-700 transition duration-300 ease-in-out"
          >
            Shoe Store
          </Link>
        </div>
        {user ? (
          <div className="flex flex-row items-center justify-start relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-primaryColor rounded-full cursor-pointer"
            >
              <UserIcon />
            </button>
            {isOpen && (
              <div
                className={`absolute z-[1000] w-[114px] flex flex-col items-center justify-center ${
                  user.isAdmin ? "-bottom-[84px]" : "-bottom-[48px]"
                } -right-[14px] bg-primaryColor rounded-lg text-white text-sm overflow-hidden`}
              >
                <Link
                  to={"/login"}
                  onClick={handleLogout}
                  className="px-3 pt-2 pb-1 w-full flex flex-row items-center gap-1 hover:bg-red-600 transiton-all duration-150 ease-in-out"
                >
                  Log out
                  <LogoutIcon />
                </Link>

                {user.isAdmin && (
                  <Link
                    to={"/dashboard"}
                    onClick={() => setIsOpen(false)}
                    className="w-full flex flex-row items-center pb-2 pt-1 px-3 gap-1 hover:bg-red-600 transiton-all duration-150 ease-in-out"
                  >
                    Add
                    <AddIcon />
                  </Link>
                )}
              </div>
            )}

            <Link
              to={"/orders"}
              onClick={() => setIsOpen(false)}
              className="ml-4 relative cursor-pointer"
            >
              <CartIcon />

              <span className="flex items-center justify-center absolute top-[-8px] right-[-6px] bg-primaryColor h-[20px] w-[20px] rounded-full text-white text-sm">
                {orders && orders.length === 0
                  ? orders.length
                  : orders?.orderDetailsByOrderId?.length}
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link className="hover:text-[#ff2f5c] transition" to="/login">
              Đăng nhập
            </Link>
            <Link
              className="bg-[#FE3E69] hover:bg-[#ff2f5c] text-white px-4 py-3 rounded-lg transition"
              to="/signup"
            >
              Đăng ký
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
