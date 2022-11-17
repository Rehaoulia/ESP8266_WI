/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Divider, Container } from "semantic-ui-react";
import MenuNavBar from "./Navbar/MenuNavBar";
import ESPPlus from "./Pages/ESPPlus"
import Home from "./Pages/Home"
import styled from "styled-components";
import AccessPoint from "./Pages/AccessPoint";
import Wifi from "./Pages/Wifi";
import TimeDate from "./Pages/TimeDate";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled(Container)`
  margin-top: 1em
`;

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <MenuNavBar />
        <Divider />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/espplus" element={<ESPPlus />} />
            <Route path="/accesspoint" element={<AccessPoint />} />
            <Route path="/wifi" element={<Wifi />} />
            <Route path="/datetime" element={<TimeDate />} />
          </Routes>
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
