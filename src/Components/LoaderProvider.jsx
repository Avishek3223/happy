import React, { useContext } from "react";
import Context from "../Context/Context";

const LoaderProvider = (props) => {
  const UtilCtx = useContext(Context).util;

  return (
    <div>
      {UtilCtx.loader && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e] z-40">
          <div className="flex items-center justify-center w-screen h-screen">
            <p className="loader">Loading....</p>
          </div>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default LoaderProvider;