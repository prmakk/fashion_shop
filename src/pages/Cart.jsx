import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import ProductInCart from '../components/ProductInCart'

const Cart = ({cartCount, setCartCount, cartItems, setCartItems}) => {
    const [sum, setSum] = useState(0)
    
    useEffect(() => {
        let totalSum = 0;
        cartItems.forEach(item => {
          totalSum += item.price * item.quantity;
        });
        setSum(totalSum);
    }, [cartItems]);

    return (
        <div>
            <Header cartCount={cartCount}/>
            <p style={{textAlign: 'right', padding: '20px 0px', maxWidth:'1720px', margin:'0 auto', fontSize:'30px'}}>{`All: $${sum.toFixed(2)}`}</p>
            <div className="productsInCart">
                {!cartCount ? <p style={{fontSize: '28px', textAlign:'center'}}>No items in cart</p> : cartItems.map(item =>
                    <ProductInCart
                        id={item.id}
                        title={item.title} 
                        price={item.price} 
                        image={item.image}
                        quantity={item.quantity}
                        setCartCount={setCartCount}
                        cartCount={cartCount}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                    />
                )}
            </div>
        </div>
    )
}

export default Cart