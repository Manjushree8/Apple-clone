import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-transparent backdrop-blur-md px-6 py-3 sticky top-0 z-50 shadow-sm">
      {/* Mobile / Tablet Navbar */}
      <div className="flex justify-between items-center lg:hidden">
        <FaApple className="text-2xl cursor-pointer" />

        <div className="flex items-center space-x-5">
          <FaSearch className="text-xl cursor-pointer" />
          <FaShoppingBag className="text-xl cursor-pointer" />
          <FaBars className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Desktop Navbar */}
      <ul
        className="hidden lg:flex items-center justify-center space-x-9 
          text-xs font-normal text-gray-800 
          leading-tight tracking-tight 
          font-[system-ui,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif]"
      >
        <li className="cursor-pointer">
          <FaApple className="text-xl hover:text-black" />
        </li>

        {[
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "AirPods",
          "TV & Home",
          "Entertainment",
          "Accessories",
          "Support",
        ].map((item, index) => (
          <li key={index} className="hover:text-black cursor-pointer">
            {item}
          </li>
        ))}

        <li className="cursor-pointer">
          <FaSearch className="text-xl hover:text-black" />
        </li>
        <li className="cursor-pointer">
          <FaShoppingBag className="text-xl hover:text-black" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
