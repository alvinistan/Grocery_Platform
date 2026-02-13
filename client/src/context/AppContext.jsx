import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyProducts} from '../assets/assets'
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children}) => {

    const currency = import.meta.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const [seller, setSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    //Fetch products from backend (for now using dummy data)
    const fetchProduct = async () => {
        setProducts(dummyProducts)
    }

    //Add Product to Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Product added to cart!");
    }

    //Update cart item quantity
    const updateCartItem = (itemId, quality)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quality;
        setCartItems(cartData);
        toast.success("Cart updated!");
    }

    //Remove Product from Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
        }if(cartData[itemId] === 0){
            delete cartData[itemId];
        }
        setCartItems(cartData);
        toast.success("Product removed from cart!");
    } 

    useEffect(() => {
        fetchProduct();
    },[]);

    const value = {
        // Add any global state or functions here
        navigate, user, setUser, seller, setSeller, showUserLogin, setShowUserLogin, 
        products,setProducts, currency, addToCart, updateCartItem, removeFromCart, cartItems
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}