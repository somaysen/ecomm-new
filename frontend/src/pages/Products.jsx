import { lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingProduct from "../components/LoadingProduct";
import useInfinite from "../utils/useInfinite";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {
    const { products, hasMore, fetchlazyProducts } = useInfinite();

    
    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchlazyProducts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="w-full flex flex-wrap grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
                {products.map((p, i) => (
                    <Suspense key={p.id} fallback={<LoadingProduct />}>
                        <ProductTemplate p={p} />
                    </Suspense>
                    
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default Products;
