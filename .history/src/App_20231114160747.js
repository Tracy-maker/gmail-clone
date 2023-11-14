import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList/EmailList";
import Login from "./components/Login";
import SendMail from "./components/SendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const AppContainer = styled.div`
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      {!user ?(<Login/>):(<AppContainer>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </AppBody>
        {sendMessageIsOpen && <SendMail />}
      </AppContainer>)}
      
    </Router>
  );
}

export default App;
