import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Router> <AppContainer>
    <Header />
    <AppBody>
      <Sidebar />

    </AppBody>
  </AppContainer></Router>
   
  );
}

export default App;
