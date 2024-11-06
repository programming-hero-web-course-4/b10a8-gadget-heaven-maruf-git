
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';
import { Helmet } from 'react-helmet-async';

const CategoryProducts = () => {
    const { category_name } = useParams();
    const allProduct = useLoaderData();
    const [products, setProducts] = useState([]);
    // console.log("Category Name:",category_name);
    // console.log("all Products:",allProduct);
    useEffect(() => {
        const categoryProducts = allProduct.filter((product) => product.category_name === category_name);
        setProducts(categoryProducts);
    }, [allProduct, category_name])
    // console.log("products by category:",products);

    return (
        <div>
            <Helmet>
                <title>Gadget Heaven || {category_name}</title>
            </Helmet>
            {
                products.length ? <div className="grid  grid-cols-3 gap-5">

                    {
                        products.map((product) => <Product key={product.product_id} product={product}></Product>)
                    }
                </div> : <div className="text-center text-3xl font-bold flex items-center justify-center min-h-[460px]"> No Products Currently Available</div>
            }
        </div>

    );
};

export default CategoryProducts;