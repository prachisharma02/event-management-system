import React, { useEffect, useState } from "react";
import axios from "axios";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("/vendors");
        setVendors(response.data);
      } catch (error) {
        console.error("Failed to fetch vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div>
      <h1>Vendors</h1>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor._id}>
            <h2>{vendor.name}</h2>
            <p>Contact: {vendor.contact}</p>
            <h3>Shop Items:</h3>
            <ul>
              {vendor.shopItems.map((item) => (
                <li key={item.name}>
                  {item.name}: ${item.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vendors;
