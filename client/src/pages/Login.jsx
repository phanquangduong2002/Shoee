import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { url } from "../api/constants";

import { motion } from "framer-motion";

import { loginStart, loginSuccess, loginFailed } from "../redux/userSlice";

const Login = () => {
  const { isLoading } = useSelector((state) => state.user);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${url}/login`, {
        userName,
        password,
      });
      if (res.data) {
        dispatch(loginSuccess(res.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailed());
      setError(true);
      setMessage(error.response.data);

      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center mt-[71px]">
      <div className="my-20 p-8 w-[40%] text-center bg-[#f3f3f3]">
        <div className="text-2xl font-semibold text-textColor">Đăng nhập</div>
        <div className="py-2 text-base text-textColor opacity-[0.7]">
          Vui lòng đăng nhập để mua hàng
        </div>

        {isLoading && (
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
        )}

        {error && (
          <div className="w-full px-4 py-1 my-2 bg-red-500 text-white rounded-lg">
            {message}
          </div>
        )}
        <form action="" className="flex flex-col mt-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Tên đăng nhập"
            className="mb-6 px-2 py-2 outline-none border-[1px] border-[#ccc] rounded-lg overflow-hidden text-base text-textColor placeholder:text-textColor placeholder:opacity-[0.7]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            className="mb-6 px-2 py-2 outline-none border-[1px] border-[#ccc] rounded-lg overflow-hidden text-base text-textColor placeholder:text-textColor placeholder:opacity-[0.7]"
          />

          <div className="flex flex-row items-center justify-between mb-6">
            <span className="text-textColor opacity-[0.7] cursor-pointer">
              Quên mật khẩu?
            </span>
            <button
              onClick={handleLogin}
              className="bg-primaryColor text-white px-4 py-2 rounded-lg"
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <div>
          Chưa có tài khoản?
          <Link to={"/signup"} className="text-primaryColor font-medium">
            {" "}
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
