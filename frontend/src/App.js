import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vendors from "./component/vendor";
import Items from "./component/items";
import Orders from "./component/orders";
import Transactions from "./component/transaction";
import Login from "./component/login";
import User from "./component/users";
import Registration from "./component/registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/users" element={<User />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/items" element={<Items />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
