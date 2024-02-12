import React, { useState } from "react";
import axios from "axios";
import { VendorList, Cart } from "./vendorlist";
import Logout from "./logout";
import GuestList from "./guest";
// import OrderStatus from "./OrderStatus";

const User = () => {
  const [category, setCategory] = useState("Catering");
  const [vendors, setVendors] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const fetchVendors = async () => {
    try {
      const response = await axios.get(`/api/vendors/${category}`);
      setVendors(response.data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Welcome User</h1>
      <button onClick={() => setCart([])}>Empty Cart</button>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="Catering">Catering</option>
          <option value="Florist">Florist</option>
          <option value="Decoration">Decoration</option>
          <option value="Lighting">Lighting</option>
        </select>
        <button onClick={fetchVendors}>Search</button>
      </div>
      <VendorList vendors={vendors} onAddToCart={addToCart} />
      <Cart items={cart} />
      <Logout />
      <GuestList />
      {/* <OrderStatus category={category} /> */}
    </div>
  );
};

export default User;
