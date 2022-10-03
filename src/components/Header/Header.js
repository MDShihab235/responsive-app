import "./Header.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <IoLocationOutline className="icon" />
        <button className="btn">
          Harhwa Fatak Nirala Nagar, Gorakhpur, Nirala Nagar, Uttar Pradesh,
          273004, India
        </button>
        <BsBellFill className="icon" />
        <MdAddShoppingCart className="icon" />
      </div>
      <div className="searchBar">
        <div className="search">
          <BsSearch className="icon" />
          <input type="search" placeholder="Search for Products..." />
        </div>

        <FaMicrophone className="icon" />
      </div>
    </div>
  );
};

export default Header;
