import axios from "../../api/config";
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproducts = () => async (dispatch, getState) => {
    try {
        const limit = getState().productReducer.products.length;
        const { data } = await axios.get(`/products?_limit=${limit}`);
        dispatch(loadproduct(data));
        console.log("Product Loaded!");
    } catch (error) {
        console.log(error);
    }
};

export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncloadproducts());
        console.log("Product Created!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncupdateproduct =
    (id, product) => async (dispatch, getState) => {
        try {
            await axios.patch(`/products/${id}`, product);
            dispatch(asyncloadproducts());
            console.log("Product Updated!");
        } catch (error) {
            console.log(error);
        }
    };

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id);
        dispatch(asyncloadproducts());
        console.log("Product Deleted!");
    } catch (error) {
        console.log(error);
    }
};
