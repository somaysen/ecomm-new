import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { asyncupdateuser } from "../store/actions/userActions";

const ProductTemplate = ({ p }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const AddtoCartHandler = () => {
        const copyUser = { ...user, cart: [...user.cart] };
        const index = user.cart.findIndex((ci) => ci.product.id === p.id);

        if (index === -1) {
            copyUser.cart.push({ product: p, quantity: 1 });
        } else {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity + 1,
            };
        }

        dispatch(asyncupdateuser(user.id, copyUser));
    };

    return (
        <motion.div
            key={p.id}
            className="w-full max-w-xs bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="relative">
                <img
                    src={p.image}
                    alt={p.title}
                    className="h-52 w-full object-contain rounded-xl mb-4 bg-white"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                    ${p.price}
                </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 truncate mb-1">
                {p.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {p.description}
            </p>

            <div className="flex justify-between items-center">
                <Link
                    to={`/update-product/${p.id}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    More Info
                </Link>
                <button
                    onClick={AddtoCartHandler}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-200 font-semibold shadow-sm"
                >
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductTemplate;
