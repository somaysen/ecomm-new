import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asynccreateproduct } from "../store/actions/productActions";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateproduct(product));
        navigate("/");
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 px-6 py-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-10">Create a New Product</h1>

            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className="w-full space-y-8"
            >
                <div>
                    <input
                        {...register("image", { required: true })}
                        type="url"
                        placeholder="Image URL"
                        className="w-full text-3xl p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-400"
                    />
                    {errors.image && <span className="text-red-500 text-sm">Image URL is required</span>}
                </div>

                <div>
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        placeholder="Product Title"
                        className="w-full text-3xl p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-400"
                    />
                    {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
                </div>

                <div>
                    <input
                        {...register("price", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+(\.[0-9]{1,2})?$/,
                                message: "Invalid price format"
                            }
                        })}
                        type="text"
                        placeholder="0.00"
                        className="w-full text-3xl p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-400"
                    />
                    {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                </div>

                <div>
                    <input
                        {...register("category", { required: true })}
                        type="text"
                        placeholder="Product Category"
                        className="w-full text-3xl p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-400"
                    />
                    {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
                </div>

                <div>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Product Description Here..."
                        rows={4}
                        className="w-full text-3xl p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-400 resize-none"
                    ></textarea>
                    {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                </div>

                <button
                    type="submit"
                    className="text-white bg-red-500 hover:bg-red-600 rounded px-6 py-4 text-3xl font-semibold transition duration-300"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
