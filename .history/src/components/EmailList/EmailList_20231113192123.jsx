import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";

const EmailListContainer = styled.div`
  flex: 1;
  overflow: scroll;
`;

const StyledEmailListSettings = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
  padding-right: 10px;
`;

const StyledEmailListSections = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  z-index: 999;
`;

const EmailListList = styled.div`
  padding-bottom: 20%;
`;

function EmailList() {
  return (
    <EmailListContainer>
      <StyledEmailListSettings>
        <div>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </StyledEmailListSettings>
      <StyledEmailListSections></StyledEmailListSections>
      <EmailListList></EmailListList>
    </EmailListContainer>
  );
}

export default EmailList;
