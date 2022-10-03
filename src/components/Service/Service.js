import "./Service.css";
import { GoDeviceMobile } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { ImBlogger2 } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { GiGasStove } from "react-icons/gi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="service">
      <div className="serviceItem">
        <GoDeviceMobile className="icons" />
        <p>Prepaid Mobile Reacharge</p>
      </div>
      <div className="serviceItem">
        <RiComputerLine className="icons" />
        <p>DTH Reacharge</p>
      </div>
      <div className="serviceItem">
        <AiFillDollarCircle className="icons" />
        <p>Loans</p>
      </div>
      <div className="serviceItem">
        <HiSpeakerphone className="icons" />
        <p>Promotion</p>
      </div>
      <div className="serviceItem">
        <BiNews className="icons" />
        <p>News</p>
      </div>
      <div className="serviceItem">
        <ImBlogger2 className="icons" />
        <p>Blog</p>
      </div>
      <div className="serviceItem">
        <BsPersonSquare className="icons" />
        <p>Jobs</p>
      </div>
      <div className="serviceItem">
        <VscFeedback className="icons" />
        <p>Anonymous Feedback</p>
      </div>
      <div className="serviceItem">
        <p style={{ color: "red" }}>Coming soon</p>
        <GiGasStove className="icons" />
        <p>Gass Booking</p>
      </div>
      <div className="serviceItem">
        <p style={{ color: "red" }}>Coming soon</p>
        <RiLightbulbFlashFill className="icons" />
        <p>Electricity Bill</p>
      </div>
      <div className="serviceItem">
        <p style={{ color: "red" }}>Coming soon</p>
        <MdOutlineWaterDrop className="icons" />
        <p>Water Bill</p>
      </div>
      <div className="serviceItem">
        <BsArrowRightCircleFill
          className="icons"
          style={{ marginTop: "40px" }}
        />
        <p>See More</p>
      </div>
    </div>
  );
};

export default Service;
