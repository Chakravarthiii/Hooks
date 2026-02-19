import React from "react";
import PropTypes from "prop-types";

const ProductDetails = ({ deepName, deepPrice, deepDescription }) => {
  // console.log(props);

  return (
    <section>
      <h3>{deepName}</h3>
      <h6>{deepPrice}</h6>
      <p>{deepDescription}</p>
    </section>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  deepName: PropTypes.number.isRequired,
  deepPrice: PropTypes.number.isRequired,
  deepDescription: PropTypes.string.isRequired,
};
