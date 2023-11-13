import { Add, Duo, Person, Phone } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

const ComposeButton = styled.button`
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
  return (
    <SidebarContainer>
      <ComposeButton startIcon={<Add fontSize="large" />}>
        Compose
      </ComposeButton>

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
