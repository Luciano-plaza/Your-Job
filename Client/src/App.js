import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Checkout from "./Pages/CheckOut/Checkout";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Carrito from "./Pages/Carrito/Carrito";
import Home from "./Pages/Home/home";
import Messenger from "./Pages/Messenger/Messenger.jsx";
import UsersEdit from "./Pages/Users/UsersEdit";
import Forum from "./Pages/Forum/Forum.jsx";
import Success from "./Pages/CheckOut/Success.jsx";
import Canceled from "./Pages/CheckOut/Cancel.jsx";
import Companies from "./Pages/Companies/Companies";
import CompaniesEdit from "./Pages/Companies/CompaniesEdit";
import { io } from "socket.io-client";
import React, { useRef } from "react";

function App() {
  

  return (
    <Routes>
      <Route
        path={"/login"}
        element={
          <div className="App">
            <Login />
          </div>
        }
      />
      <Route path={"/"} element={<Home/>} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/company/:companyname"} element={<Companies/>} />
      <Route path={"/company/:companyname/edit"} element={<CompaniesEdit/>} />
      <Route path={"/users/:username"} element={<Users/>} />
      <Route path={"/users/:username/edit"} element={<UsersEdit/>} />
      <Route path={"/onboarding"} element={<Onboarding/>} />
      <Route path={"/checkout"} element={<Checkout/>} />
      <Route path={"/products"} element={<Products/>} />
      <Route path={"/carrito"} element={<Carrito/>} />
      <Route path={"/product/:id"} element={<Product/>} />
      <Route path={"/messenger"} element={<Messenger />} />
      <Route path={"/forum"} element={<Forum/>} />
      <Route path={"/forum/create"} element={<Forum  />} />
      <Route path={"/success"} element={<Success />} />
      <Route path={"/canceled"} element={<Canceled />} />
    </Routes>
  );
}

export default App;
