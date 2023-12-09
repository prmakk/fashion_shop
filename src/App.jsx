import '../src/styles/css/main.css'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
    const[cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="App">

            <Routes>
                <Route path='/' element={
                    <Main 
                        cartCount={cartCount} 
                        setCartCount={setCartCount}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                    />
                }/>

                <Route path='/cart' element={
                    <Cart 
                        cartCount={cartCount} 
                        setCartCount={setCartCount}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                    />
                }/>
            </Routes>
        </div>
    )
}

export default App;
