import React, { useState, useEffect } from "react";
import { SearchIcon } from "../assets/index";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import { url } from "../api/constants";

import { getProducts, getProductsSuccess } from "../redux/productSlice";

import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [valueInput, setValueInput] = useState("");

  const debounced = useDebounce(valueInput, 1000);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    const fetchData = async () => {
      const resProduct = await axios.get(
        `${url}/product/search?keyword=${encodeURIComponent(debounced)}`
      );
      dispatch(getProductsSuccess(resProduct.data));
    };

    fetchData();
  }, [debounced]);
  return (
    <div className="px-10 py-4 flex flex-row items-center justify-center">
      <form
        action=""
        className="w-1/2 px-6 py-2 flex flex-row items-center justify-start border-[1px] border-primaryColor rounded-full focus-within:outline-offset-0 focus-within:outline focus-within:outline-2 focus-within:outline-[rgba(245,55,55,0.3)] transition-all duration-75 ease-in-out"
      >
        <input
          type="text"
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          placeholder="Tìm kiếm sản phẩm"
          className="flex-1 outline-none border-none text-textColor placeholder:text-textColor placeholder:opacity-[0.7]"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
