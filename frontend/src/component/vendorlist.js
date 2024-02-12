import React from "react";

const VendorList = ({ vendors, onAddToCart }) => {
  return (
    <ul>
      {vendors.map((vendor) => (
        <li key={vendor.id}>
          <h2>{vendor.name}</h2>
          <p>{vendor.description}</p>
          <button onClick={() => onAddToCart(vendor)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { VendorList, Cart };
