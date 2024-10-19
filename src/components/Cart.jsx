import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="w-[400] m-auto bg-white mt-10 pb-6">
            {cartItems.map((cartItem) => (
                <div className="flex p-7 gap-2 items-center justify-center w-[300] m-auto">
                    <span className={`${cartItem.card.info.isVeg === 1 ? 'text-green-600' : 'text-red-600'}`}>&#9635;</span>
                    <h1 className="text-xs text-black">{cartItem.card.info.name}</h1>
                    <div className="w-16 mx-6 flex gap-3 px-2 border-2 font-bold text-sm"><span className="text-gray-400">-</span><span className="text-green-500">1</span><span className="text-green-500">+</span></div>
                    <p className="text-xs">₹{cartItem.card.info.defaultPrice/100 || cartItem.card.info.price/100}</p>
                </div>
            ))}
            {cartItems.length === 0 ? 
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-center pt-6">Your cart is empty</h1>
                    <Link to="/"><button className="bg-orange-400 p-3 rounded-md text-white uppercase font-bold">see restaurants near you</button></Link>
                </div> 
                : 
                <div className="flex items-center justify-center gap-7">
                    <button className="p-2 bg-red-400 text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                    <button className="p-2 bg-green-400 text-white rounded-lg">Buy Now</button>
                </div>
            }
            
        </div>
    )
}

export default Cart