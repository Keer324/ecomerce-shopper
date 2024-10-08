import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumbs/BreadCrumb';
import ProductDisplay from '../Components/Product_Display/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Products = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <BreadCrumb product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
        </div>

    )
}

export default Products