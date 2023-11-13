import {
  AccessTime,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { Icon } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SidebarOption from "../SidebarOption";

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

const ComposeButton = styled(Button)`
  margin-top: 20px !important;
  margin-left: 10px !important;
  margin-bottom: 20px !important;
  text-transform: capitalize !important;
  color: gray;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

const Footer = styled.div`
  display: flex;
  justify-content: left;
`;

const FooterIcons = styled.div`
 display: flex;
  justify-content: center;
  
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ComposeButton startIcon={<AddIcon fontSize="large" />}>
        Compose
      </ComposeButton>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <Footer>
        <FooterIcons>
          <Icon>
            <Person />
          </Icon>
          <Icon>
            <Duo />
          </Icon>
          <Icon>
            <Phone />
          </Icon>
        </FooterIcons>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
