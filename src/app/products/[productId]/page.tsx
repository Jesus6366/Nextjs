import React from "react";

const ProductDetail = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <h1>Product : {params.productId}</h1>;
};

export default ProductDetail;
