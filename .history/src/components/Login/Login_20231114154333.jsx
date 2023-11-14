import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";


const LoginContainer = styled.div`
  background-color: #f2f2f2;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const GmailLogo = styled.img`
  object-fit: contain;
  height: 200px;
  margin-bottom: 30px;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #1a73e8; 
    color: white;
  }
`;

const Login = () => {
  const dispatch = useDispatch();

  return (
    <LoginContainer>
      <LoginContent>
        <GmailLogo
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png"
          alt="gmail m logo"
        />
        <LoginButton variant="contained" color="primary" >
          Login
        </LoginButton>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
