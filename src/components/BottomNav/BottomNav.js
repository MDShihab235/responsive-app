import "./BottomNav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { AiTwotoneProfile } from "react-icons/ai";
import { RiFileList3Fill } from "react-icons/ri";
import { BsFillChatSquareTextFill } from "react-icons/bs";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <div className="nav">
        <div className="navItem">
          <AiTwotoneHome className="nicon" />
          <p>Home</p>
        </div>
        <div className="navItem">
          <AiTwotoneProfile className="nicon" />
          <p>Profile</p>
        </div>
        <div className="navItem">
          <img
            src="https://putatoe.com/img/logo.png"
            alt="pimg"
            className="pImg"
          />
        </div>
        <div className="navItem">
          <RiFileList3Fill className="nicon" />
          <p>Follow List</p>
        </div>
        <div className="navItem">
          <BsFillChatSquareTextFill className="nicon" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
