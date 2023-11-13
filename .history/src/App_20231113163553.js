import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList/EmailList";

const AppContainer = styled.div`
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </AppBody>
      </AppContainer>
    </Router>
  );
}

export default App;
