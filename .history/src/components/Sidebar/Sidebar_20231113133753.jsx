import React from "react";
import styled from "styled-components";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOption from "./SidebarOption";
import { openSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

const ComposeButton = styled(Button)`
  margin-top: 15px !important;
  margin-left: 10px !important;
  margin-bottom: 15px !important;
  text-transform: capitalize !important;
  color: gray;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <ComposeButton
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </ComposeButton>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <Footer>
        <FooterIcons>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </FooterIcons>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
