import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import LinkedIn from "./assets/linkedin.png";
import { logout } from "./features/userSlice";
import { useDispatch , useSelector} from "react-redux";
import { auth } from "./firebase";
import {selectUser} from './features/userSlice'
const Header = () => {
	const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
	auth.signOut()
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedIn} alt="" />
      </div>
      <div className="header__search">
        <Search />
        <input placeholder="Search" type="text" />
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          onClick={logoutOfApp}
          avatar={true}
        />
      </div>
    </div>
  );
};

export default Header;
