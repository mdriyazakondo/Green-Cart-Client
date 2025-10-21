import React from "react";
import { NavLink } from "react-router";
import { assets } from "../../assets/assets.js";
import { useAppContext } from "../../context/ApppContext";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  const logoutUser = async () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to={"/"} onClick={() => setOpen(false)}>
        <img src={assets.logo} className="h-9" alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>All Product</NavLink>
        <NavLink to={"/"}>Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search_icon" className="w-4 h-4" />
        </div>

        <div className="relative cursor-pointer">
          <img
            onClick={() => navigate("/cart")}
            src={assets.nav_cart_icon}
            alt="nav_cart_icon"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-10 cursor-pointer"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={logoutUser}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                LogOut
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu_icon" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden cursor-pointer`}
        >
          <NavLink to={"/"} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/"} onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          {user && (
            <NavLink to={"/"} onClick={() => setOpen(false)}>
              {" "}
              My Orders{" "}
            </NavLink>
          )}
          <NavLink to={"/"} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logoutUser}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Log Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
