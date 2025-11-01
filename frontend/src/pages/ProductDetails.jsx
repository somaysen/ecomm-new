import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    asyncdeleteproduct,
    asyncupdateproduct,
} from "../store/actions/productActions";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useSelector((state) => state.userReducer);
    const { products } = useSelector((state) => state.productReducer);
    const product = products.find((p) => p.id == id);

    const [imagePreview, setImagePreview] = useState(product?.image || "");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description,
        },
    });

    const watchedImage = watch("image");

    useEffect(() => {
        setImagePreview(watchedImage);
    }, [watchedImage]);

    const UpdateProductHandler = async (updatedProduct) => {
        setLoading(true);
        await dispatch(asyncupdateproduct(product.id, updatedProduct));
        setLoading(false);
        alert("Product updated successfully!");
    };

    const DeleteHandler = () => {
        if (confirm("Are you sure you want to delete this product?")) {
            dispatch(asyncdeleteproduct(id));
            navigate("/");
        }
    };

    if (!product)
        return <p className="text-center text-red-500 text-xl">Product not found.</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 animate-fade-in">
            {/* Product Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 transition-transform hover:scale-[1.01]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-contain bg-gray-100"
                    onError={(e) => (e.target.src = "/placeholder.png")}
                />
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold">{product.title}</h1>
                        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full uppercase">
                            {product.category}
                        </span>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="text-4xl font-semibold text-red-500 mb-4">
                        ${product.price}
                    </div>
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-3 rounded-full transition">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>

            {/* Admin Form */}
            {user?.isAdmin && (
                <div className="bg-white rounded-2xl shadow-md p-8 mt-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Admin: Edit Product
                    </h2>
                    <form onSubmit={handleSubmit(UpdateProductHandler)} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Image URL
                            </label>
                            <input
                                {...register("image", { required: "Image URL is required" })}
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                className="w-full p-3 border rounded focus:ring-blue-300"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                            )}
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="h-48 mt-4 object-contain rounded border"
                                />
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Title
                            </label>
                            <input
                                {...register("title", { required: "Title is required" })}
                                type="text"
                                className="w-full p-3 border rounded focus:ring-blue-300"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Price
                            </label>
                            <input
                                {...register("price", { required: "Price is required" })}
                                type="text"
                                className="w-full p-3 border rounded focus:ring-blue-300"
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Category
                            </label>
                            <input
                                {...register("category", { required: "Category is required" })}
                                type="text"
                                className="w-full p-3 border rounded focus:ring-blue-300"
                            />
                            {errors.category && (
                                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Description
                            </label>
                            <textarea
                                {...register("description", {
                                    required: "Description is required",
                                })}
                                rows="4"
                                className="w-full p-3 border rounded resize-none focus:ring-blue-300"
                            ></textarea>
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded transition disabled:opacity-50"
                            >
                                {loading ? "Updating..." : "Update Product"}
                            </button>
                            <button
                                type="button"
                                onClick={DeleteHandler}
                                className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-6 rounded transition"
                            >
                                Delete Product
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
