import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const CreateProduct = lazy(() => import("../pages/CreateProduct"));
const Settings = lazy(() => import("../pages/Settings"));
const Unauth = lazy(() => import("./Unauth"));
const Auth = lazy(() => import("./Auth"));
const Products = lazy(() => import("../pages/Products"));
const Signin = lazy(() => import("../pages/Signin"));
const Signup = lazy(() => import("../pages/Signup"));
const About = lazy(() => import("../pages/About"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />

            <Route
                path="/signin"
                element={
                    <Unauth>
                        <Signin />
                    </Unauth>
                }
            />
            <Route
                path="/signup"
                element={
                    <Unauth>
                        <Signup />
                    </Unauth>
                }
            />

            <Route
                path="/settings"
                element={
                    <Auth>
                        <Settings />
                    </Auth>
                }
            />

            <Route
                path="/update-product/:id"
                element={
                    <Auth>
                        <ProductDetails />
                    </Auth>
                }
            />

            <Route
                path="/create-product"
                element={
                    <Auth>
                        <CreateProduct />
                    </Auth>
                }
            />

            <Route
                path="/cart"
                element={
                    <Auth>
                        <Cart />
                    </Auth>
                }
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
