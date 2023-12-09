import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import HeroSection from '../components/HeroSection';
import DownloadAppSection from '../components/DownloadAppSection';

const Main = ({cartCount, setCartCount, cartItems, setCartItems}) => {

    return (
        <div>
            <Header cartCount={cartCount}/>
            <HeroSection />
            <Products 
                cartCount={cartCount} 
                setCartCount={setCartCount} 
                setCartItems={setCartItems} 
                cartItems={cartItems}
            />
            <DownloadAppSection />
        </div>
    )
}

export default Main