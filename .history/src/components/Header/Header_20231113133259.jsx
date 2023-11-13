import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import {
  Apps,
  ArrowDropDown,
  Menu,
  NotificationAdd,
  NotificationAddRounded,
  NotificationImportantSharp,
  Search,
} from "@mui/icons-material";

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
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <Menu />
        </IconButton>

        <HeaderImage
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="gmail logo"
        />
      </HeaderLeft>

      <HeaderMiddle>
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <NotificationImportantSharp/>
        </IconButton>
        <Avatar />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
