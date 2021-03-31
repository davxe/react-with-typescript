import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { productInfo } from '../../data/productData';
import { Product } from '../Product/Product';
interface IProduct{
    id:number,
    title:string,
    price:number,
    description?:string;
}
export const Products:React.FC=(props)=>{
    const [products,setProducts]=useState<Array<IProduct>>();
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(()=>{
        setTimeout(()=>{
            setProducts(productInfo);
            setLoading(false);
        },1000);
    },[]);// we can use [] because only once we want to get data

    return(
        <div>
            {loading && <div>loading....</div>}
            {
                products?.length && products?.map((product,index)=>(
                    <div key={index}>
                        <Link to={`/product/${product.id}`}>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                addToCart={()=>{}}
                                updateTitle={({title,id})=>{ }}
                            >
                                {product.description}
                            </Product>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}