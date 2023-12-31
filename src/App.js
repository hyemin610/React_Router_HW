import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Layout from "./common/Layout";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div> <Link to="/"></Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
