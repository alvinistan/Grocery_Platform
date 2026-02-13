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
    const [cardItems, setCardItems] = useState({});

    //Fetch products from backend (for now using dummy data)
    const fetchProduct = async () => {
        setProducts(dummyProducts)
    }

    //Add Product to Cart
    const addToCart = () => {
        let cartData = structuredClone(cardItems);
        if(cartData[itemId]){
            cartData[itemId] = +1;
        }else{
            cartData[itemId] = 1;
        }
        setCardItems(cartData);
        toast.success("Product added to cart!");
    }

    useEffect(() => {
        fetchProduct();
    },[]);

    const value = {
        // Add any global state or functions here
        navigate, user, setUser, seller, setSeller, showUserLogin, setShowUserLogin, 
        products,setProducts, currency
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