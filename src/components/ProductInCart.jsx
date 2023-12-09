import React from 'react'

const ProductInCart = ({id, title, price, image, quantity, setCartCount, cartCount, cartItems, setCartItems}) => {
    
    const removeFromCart = () =>{
        setCartCount(cartCount - 1)
        setCartItems(cartItems.filter(item => item.id !== id))
        console.log(cartItems)
    }

    const updateQuantity = (e) => {
        const newQuantity = parseInt(e.target.value)
        const updatedItems = cartItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: newQuantity }
          }
          return item
        })
        setCartItems(updatedItems);
    }

    return (
        <div className='product'>
            <div className="product__image">
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="product__info">
                <p>${price}</p>
                <input 
                    type="number" 
                    min={1}
                    value={quantity}
                    onKeyDown={(e) => e.preventDefault()}
                    placeholder={quantity}
                    onChange={updateQuantity}
                />
                <button className='removeBtn' onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    )
}

export default ProductInCart