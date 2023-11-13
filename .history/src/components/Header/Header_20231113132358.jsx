import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderImage = styled.img`
  object-fit: contain;
  height: 60px;
  margin-left: 5px;
`;

const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  background-color: whitesmoke;
  padding: 5px 15px;
  border-radius: 5px;

  > .MuiSvgIcon-root {
    color: gray;
  }

  > input {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: medium;
    background-color: transparent;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <HeaderImage
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="gmail logo"
        />
      </HeaderLeft>

      <HeaderMiddle>
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoURL} onClick={signOut} />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
