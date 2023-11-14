import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "../Section";
import { Inbox, LocalOfferOutlined, People } from "@mui/icons-material";
import EmailRow from "../EmailRow/EmailRow";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

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

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "email"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) =>
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

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
      <StyledEmailListSections>
        <Section Icon={Inbox} title="Primary" color="red" selected={true} />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferOutlined} title="Promotions" color="green" />
      </StyledEmailListSections>
      <EmailListList>
        <EmailRow
          id={id}
          key={id}
          title="Twitch"
          subject="what you are guys don't understands, for us, kissing is as important as any part of it."
          description="This is a text"
          time="10pm"
        />
      </EmailListList>
    </EmailListContainer>
  );
};

export default EmailList;
