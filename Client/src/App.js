import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Checkout from "./Pages/CheckOut/Checkout";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Carrito from "./Pages/Carrito/Carrito";
import RegisterUser from "./Components/register/RegisterUser";
import RegisterCompany from "./Components/register/RegisterCompany";
import Home from "./Pages/Home/home";
import Messenger from "./Pages/Messenger/Messenger.jsx";
import Forum from "./Pages/Forum/Forum.jsx";


function App() {
  return (
    <Routes>
      <Route
        path={"/home"}
        element={
          <div className="App">
            <Home />
          </div>
        }
      />
      <Route path={"/"} element={<Login />} />
      <Route path={"/users/:user"} element={<Users />} />
      <Route path={"/onboarding"} element={<Onboarding />} />
      <Route path={"/checkout"} element={<Checkout />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/carrito"} element={<Carrito />} />
      <Route path={"/product/:id"} element={<Product />} />
      <Route path={"/messenger"} element={<Messenger />} />
      <Route path={"/forum"} element={<Forum />} />
    </Routes>
  );
}

export default App;
