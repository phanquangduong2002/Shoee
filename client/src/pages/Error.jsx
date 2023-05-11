import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="mt-[71px]">Page not found!!!</div>;
};

export default Error;
