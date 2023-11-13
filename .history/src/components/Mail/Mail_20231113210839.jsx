import { Icon } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  WatchLater,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MailContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const MailToolsLeft = styled.div`
  display: flex;
`;

const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;
`;

const MailImportantIcon = styled(LabelImportant)`
  color: #e8ab02 !important;
`;

const MailBodyHeaderText = styled.h2`
  font-weight: 400;
  margin-right: 20px;
`;

const MailTime = styled.p`
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 12px;
  color: gray;
`;

const MailMessage = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 14px;
`;

const MailMessageText = styled.p`
  padding: 10px;
  margin-right: 20px;
  overflow-wrap: break-word;
`;

const Mail = () => {
  const history = useNavigate();

  return (
    <MailContainer>
      <MailTools>
        <MailToolsLeft>
          <Icon onClick={() => history.push("/")}>
            <ArrowBack />
          </Icon>
          <Icon>
            <MoveToInbox />
          </Icon>
          <Icon>
            <Error />
          </Icon>
          <Icon>
            <Delete />
          </Icon>
          <Icon>
            <Email />
          </Icon>
          <Icon>
            <WatchLater />
          </Icon>
          <Icon>
            <CheckCircle />
          </Icon>
          <Icon>
            <LabelImportant />
          </Icon>
          <Icon>
            <MoreVert />
          </Icon>
        </MailToolsLeft>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </MailTools>
      <MailBody>
        <MailBodyHeader>
          <MailBodyHeaderText>{selectedMail?.subject}</MailBodyHeaderText>
          <MailImportantIcon />
          <p className="mail__title">{selectedMail?.title}</p>
          <MailTime>{selectedMail?.time}</MailTime>
        </MailBodyHeader>

        <MailMessage>
          <MailMessageText>{selectedMail?.description}</MailMessageText>
        </MailMessage>
      </MailBody>
    </MailContainer>
  );
};

export default Mail;
