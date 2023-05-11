import React from "react";
import Image from "../assets/icons/homepage.svg";

import { PaymentIcon, PlaneIcon, ReturnIcon, SupportIcon } from "../assets";

const Banner = () => {
  return (
    <div className="h-full max-h-[680px] px-10 pt-0 pb-0 xl:mb-16">
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="ml-20 flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <h1 className="text-4xl lg:text-[66px] font-medium leading-none mb-6">
              <span
                className="text-[#FE3E69]
              italic font-semibold
              "
              >
                Shoe Store,
              </span>{" "}
              Your dream footwear store.
            </h1>
            <p className="max-w-[500px] mb-8 font-normal text-xl">
              Giày đẹp, chất lượng tuyệt vời - Tạo phong cách của bạn với chúng
              tôi
            </p>
            <button className="bg-[#FE3E69] hover:bg-[#fe2856] text-white px-4 py-3 rounded-lg transition">
              Bắt đầu
            </button>
          </div>
          <div
            className="relative flex-1 hidden lg:flex justify-end items-end pb-3"
            style={{
              minHeight: "620px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "2%",
                left: "50%",
                transform: "translate(-50%, -2%)",
                width: "460px",
                height: "460px",
                borderRadius: "50%",
                backgroundImage:
                  "linear-gradient(360deg, #db506e 0%, #fe3e69 75%)",
                opacity: "0.90",
                filter: "blur(2px)",
              }}
              className="shadow-2xl"
            ></div>
            <img
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                zIndex: 2,
              }}
              className="overflow-hidden rounded-full transition"
              width={520}
              src={Image}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-start justify-start">
            <div className="mt-1">
              <PlaneIcon />
            </div>
            <div className="pl-3 flex flex-col items-start justify-start">
              <span className="pb-2 text-base font-medium text-textColor">
                Miễn phí vận chuyển
              </span>
              <span className="text-sm font-thin text-[#777]">
                Miễn phí vận chuyển tất cả các đơn hàng
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="mt-1">
              <SupportIcon />
            </div>
            <div className="pl-3 flex flex-col items-start justify-start">
              <span className="pb-2 text-base font-medium text-textColor">
                Hỗ trợ 24/7
              </span>
              <span className="text-sm font-thin text-[#777]">
                Hỗ trợ 24 giờ một ngày
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="mt-1">
              <ReturnIcon />
            </div>
            <div className="pl-3 flex flex-col items-start justify-start">
              <span className="pb-2 text-base font-medium text-textColor">
                Hoàn tiền
              </span>
              <span className="text-sm font-thin text-[#777]">
                30 ngày đổi trả miễn phí
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="mt-1">
              <PaymentIcon />
            </div>
            <div className="pl-3 flex flex-col items-start justify-start">
              <span className="pb-2 text-base font-medium text-textColor">
                Thanh toán an toàn 100%
              </span>
              <span className="text-sm font-thin text-[#777]">
                thanh toán bằng thẻ ngân hàng
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
