import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";

const Cart = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);
    console.log(user);

    const IncreaseQuantity = (index) => {
        const copyUser = { ...user, cart: [...user.cart] };
        copyUser.cart[index] = {
            ...copyUser.cart[index],
            quantity: copyUser.cart[index].quantity + 1,
        };
        dispatch(asyncupdateuser(user.id, copyUser));
    };

    const DecreaseQuantity = (index) => {
        const copyUser = { ...user, cart: [...user.cart] };
        if (copyUser.cart[index].quantity === 1) {
            copyUser.cart.splice(index, 1);
        } else {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity - 1,
            };
        }
        dispatch(asyncupdateuser(user.id, copyUser));
    };

    const total = user.cart.reduce(
        (acc, item) => acc + item.quantity * Number(item.product.price),
        0
    );

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            {user.cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {user.cart.map((ci, i) => (
                            <div
                                key={i}
                                className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
                            >
                                <img
                                    src={ci.product.image}
                                    alt={ci.product.title}
                                    className="w-24 h-24 object-contain rounded-md"
                                />
                                <div className="flex-1 mx-4">
                                    <h2 className="text-lg font-semibold">{ci.product.title}</h2>
                                    <p className="text-gray-600">${ci.product.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => DecreaseQuantity(i)}
                                        className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400 flex items-center justify-center text-xl"
                                    >
                                        -
                                    </button>
                                    <span className="mx-4 text-lg">{ci.quantity}</span>
                                    <button
                                        onClick={() => IncreaseQuantity(i)}
                                        className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400 flex items-center justify-center text-xl"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-right">
                        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
