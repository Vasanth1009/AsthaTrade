import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import './style.scss';
import logo from '../../assets/images/logo.svg';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-header container">
        <div className="nav-bar-header-left">
          <span className="menu-icon">
            <AiOutlineMenu color="#495057" />
          </span>
          <img src={logo} alt="astha trade" className="logo" />
        </div>
        <div className="nav-bar-header-right">
          <div className="menus">
            <span className="menu-item">
              Products <MdOutlineKeyboardArrowDown />
            </span>
            <span className="menu-item">
              Pricing <MdOutlineKeyboardArrowDown />
            </span>
            <span className="menu-item">
              Help & Support <MdOutlineKeyboardArrowDown />
            </span>
            <span className="menu-item">
              Company <MdOutlineKeyboardArrowDown />
            </span>
            <span className="menu-item">
              Become a partner <MdOutlineKeyboardArrowDown />
            </span>
          </div>
          <button className="menu-button">Open Free Account</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
