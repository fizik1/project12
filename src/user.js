import { AiFillHome, AiTwotoneTool } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsFillChatLeftFill, BsPinAngleFill, BsPlusLg } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { MdPermMedia, MdSettingsInputComposite } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { FaCashRegister } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

function User({ user }) {
  return (
    <div className="user-page">
      <div className="top-nav">
        <div>
          <AiFillHome /> Sample Data
        </div>
        <div>
          <HiOutlineRefresh />7
        </div>
        <div>
          <BsFillChatLeftFill /> 0
        </div>
        <div>
          <BsPlusLg /> New
        </div>
      </div>
      <div className="container">
        <div className="left-nav">
          <div className="link">
            <IoSpeedometerSharp /> Dashboard
          </div>
          <br />
          <div className="link">
            <BsPinAngleFill /> Posts
          </div>
          <div className="link">
            <MdPermMedia />
            Media
          </div>
          <div className="link">
            <RiPagesFill />
            Pages
          </div>
          <div className="link">
            <HiOutlineRefresh />
            Comments
          </div>
          <div className="link">
            <FaCashRegister />
            RegistrationMagic
          </div>
          <br />
          <div className="link">
            <IoIosColorPalette />
            Apperance
          </div>
          <div className="link">
            <FaUserAlt />
            Plugins
          </div>
          <div className="link">
            <AiTwotoneTool />
            Users
          </div>
          <div className="link">
            <MdSettingsInputComposite />
            Settings
          </div>
        </div>
        <div className="right-nav">
          <div className="col11">
            <div className="image">
              <img src={user?.picture?.large} alt='profile' />
            </div>
            <div className="contents">
                <div className="content">
                    <div>FIRST NAME</div>
                    <div>{user?.name?.first}</div>
                </div>
                <div className="content">
                    <div>LAST NAME</div>
                    <div>{user?.name?.last}</div>
                </div>
                <div className="content">
                    <div>AGE</div>
                    <div>{user?.dob?.age}</div>
                </div>
                <div className="content">
                    <div>EMAIL</div>
                    <div>{user?.email}</div>
                </div>
                <div className="content">
                    <div>GFENDER</div>
                    <div>{user?.gender}</div>
                </div>
                <div className="content">
                    <div>BIO</div>
                    <div>{user?.bio}</div>
                </div>
                <div className="content">
                    <div>SECONDARY EMAIL</div>
                    <div>{user?.secEmail}</div>
                </div>
                <div className="content">
                    <div>USER NAME</div>
                    <div>{user?.login?.username}</div>
                </div>
                <div className="content">
                    <div>WEBSITE</div>
                    <div>{user?.website}</div>
                </div>
            </div>
          </div>
          <div className="col12">
            <div className="sections">
                <div>CUSTOM FIELDS</div>
                <div>SUBMISSIONS</div>
                <div>PAYMENTS</div>
            </div>
            <div>
            <div className="content">
                <div>PHONE</div>
                <div>{user?.phone}</div>
            </div>
            <div className="content">
                <div>ADDRESS</div>
                <div>{user?.location?.street?.name}, {user?.location?.city}, {user?.location?.state}, {user?.location?.country}<br/>
                <b>Street Address: </b>{user?.location?.street?.name}<br/>
                <b>City: </b>{user?.location?.city}<br/>
                <b>State: </b>{user?.location?.state}<br/>
                <b>Country: </b>{user?.location?.country}
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
