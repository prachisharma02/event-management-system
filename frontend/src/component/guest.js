import React, { useState, useEffect } from "react";
import axios from "axios";
const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get("/api/guests");
        setGuests(response.data);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };

    fetchGuests();
  }, []);

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest._id}>
            {guest.name} ({guest.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
