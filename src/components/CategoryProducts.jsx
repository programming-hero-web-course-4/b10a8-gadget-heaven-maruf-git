
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

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
            {
                products.length ? <div className="grid  grid-cols-3 gap-5">
                    {
                        products.map((product) => <Product key={product.product_id} product={product}></Product>)
                    }
                </div> : <div className="text-center text-3xl font-bold"> No products Available</div>
            }

        </div>

    );
};

export default CategoryProducts;