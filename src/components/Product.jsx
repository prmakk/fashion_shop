import React, { useEffect, useRef, useState } from 'react'

const Product = ({id, title, price, image, setCartCount, cartCount, cartItems, setCartItems}) => {

    const [isCartAdded, setIsCartAdded] = useState(false)
    const [isBtnAdded, setIsBtnAdded] = useState(false)
    const ref = useRef(null)

    useEffect(() =>{
        if(setIsCartAdded){
            const timeoutID = setTimeout(() =>{
                setIsCartAdded(false)
            }, 3000)

            return () => clearTimeout(timeoutID);
        }

    }, [isCartAdded, setIsCartAdded])

    useEffect(() =>{
        const isItemInCart = cartItems.some(item => item.id === id)

        if(isItemInCart){
            setIsBtnAdded(true)
        }
    }, [cartItems, id])

    const handleAddToCart = () =>{
        const isItemInCart = cartItems.some(item => item.id === id)

        if(isItemInCart){
            setIsBtnAdded(true)
        }
        else{
            setCartCount(cartCount + 1)
            setCartItems([...cartItems,
            {
                id: id,
                title: title,
                image: image,
                price: price,
                quantity: 1
            }])
            setIsCartAdded(true)
            ref.current.disabled = true
            setIsBtnAdded(true)
        }
    }


    return (
        <div className='product'>
            
            <div className={isCartAdded ? 'addedCartNotification _active' : 'addedCartNotification'}>
                <img width="28" height="28" src="https://img.icons8.com/fluency/48/checked.png" alt="checked"/>
                <p>Added</p>
            </div>

            <div className="product__image">
                <img src={image} alt="" />
            </div>
            <h3 className='product__title'>{title}</h3>
            <div className="product__info">
                <p>${price}</p>
                <button ref={ref} className={isBtnAdded ? 'addCartBtn _active' : 'addCartBtn'} onClick={handleAddToCart}>{isBtnAdded ? 'Added' : 'Add to cart'}</button>
            </div>
        </div>
    )
}

export default Product