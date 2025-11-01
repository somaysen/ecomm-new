import { useDispatch, useSelector } from "react-redux";
import { lazyloadproduct } from "../store/reducers/productSlice";
import axios from "../api/config";
import { useEffect, useState } from "react";

const useInfinite = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    const [hasMore, sethasMore] = useState(true);
    const fetchlazyProducts = async () => {
        try {
            const { data } = await axios.get(
                `/products?_limit=6&_start=${products.length}`
            );
            if (data.length === 0) {
                sethasMore(false);
            } else {
                dispatch(lazyloadproduct(data));
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchlazyProducts();
    }, []);

    return { products, hasMore, fetchlazyProducts };
};

export default useInfinite;
