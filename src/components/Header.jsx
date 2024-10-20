import { useState } from "react"; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({logo}) => {

    const [btnName, setBtnName] = useState("Login")

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between h-20 shadow-sm shadow-gray-100 bg-white">
            <Link to="/">
                <div className="logo-container">
                    <img className="w-20" src={logo}/>
                </div>
            </Link>
            <div className="flex items-center font-semibold">
                <ul className="flex p-4 m-4 hover:cursor-pointer">
                    <Link to="/search"><li className="mx-4 py-2 hover:text-orange-400"><i className="fa fa-search mx-2"></i><span className="text-sm">Search</span></li></Link>
                    <Link to="/cart" className="hover:text-orange-400"><li className="mx-4 py-2 relative"><span className="absolute text-xs bg-black rounded-full -top-0 -left-2 w-4 h-4 text-center text-white hover:bg-orange-400">{cartItems.length}</span><i className="fa fa-shopping-cart text-lg mr-2"></i></li></Link>
                    <button className="hover:text-orange-400" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;