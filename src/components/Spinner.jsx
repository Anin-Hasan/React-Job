import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const override = { display: "block", margin: "100px auto" };

  return (
    <>
      <MoonLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </>
  );
};

export default Spinner;
