import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const AllProduct = () => {
    const products = useLoaderData();
    // console.log("hello ji products",products);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products.map((product) => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default AllProduct;