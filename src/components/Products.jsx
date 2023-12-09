import React, {useState, useEffect} from "react";
import Product from "./Product";

const Products = ({setCartCount, cartCount, setCartItems, cartItems}) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        fetch('https://fakestoreapi.com/products?limit=9')
        .then(res => res.json())
        .then(json => console.log(json))
    }, [])

    useEffect( () => {
        fetch('https://fakestoreapi.com/products?limit=9')
        .then(res => res.json())
        .then(json => setProducts(json))
        .finally(setIsLoading(false))
    }, [])

    return (
        <section className="arrivals" id='catalogue'>
            <div className="title">
                <h3>new arrivals</h3>
            </div>
            <div className="products">
                
                {isLoading ? <p>Loading</p> : products && products.map( item =>
                    <Product 
                        id={item.id} 
                        title={item.title} 
                        price={item.price} 
                        image={item.image}
                        setCartCount={setCartCount}
                        cartCount={cartCount}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                    />
                )}
            </div>
        </section>
    )
};

export default Products;
