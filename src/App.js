import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Agreement from "./components/login/Agreement";
import Login from "./components/login/Login";
import "./App.css";
import Service from "./components/login/Service";
import Personal from "./components/login/Personal";
import TodoBox from "./components/main/TodoBox/TodoBox";
import TodoMall from "./components/main/TodoMall/TodoMall";
import MyPage from "./components/main/MyPage/MyPage";
import PlanPurchase from "./components/plan/PlanPurchase";
import PlanDetail from "./components/plan/PlanDetail/PlanDetail";
import Settings from "./components/settings/Settings";
import PlanRetry from "./components/plan/PlanRetry";
import TryDetail from "./components/main/MyPage/TryDetail";
import Announcement from "./components/settings/Announcement";
import AnnouncementDetail from "./components/settings/AnnouncementDetail";
import TodoDetail from "./components/todo/TodoDetail";
import TodoSubmit from "./components/todo/TodoSubmit";
import TodoSubmitSuccess from "./components/todo/TodoSubmitSuccess";
import TodoAnswer from "./components/todo/TodoAnswer";
import Social from "./components/login/Social";
import { MAX_WIDTH } from "./constants";

function App() {
  return (
    <Container>
      <Routes>
        {/* Login, Terms of Service Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/social" element={<Social />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/service" element={<Service />} />
        <Route path="/personal" element={<Personal />} />

        {/* Main pages Routes */}
        <Route path="/todobox" element={<TodoBox />} />
        <Route path="/todomall" element={<TodoMall />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* Todo Detail, Assignment Routes */}
        <Route path="/todo/:todoid/detail" element={<TodoDetail />} />
        <Route path="/todo/:todoid/submit" element={<TodoSubmit />} />
        <Route path="/todo/:todoid/answer" element={<TodoAnswer />} />
        <Route path="/todo/success" element={<TodoSubmitSuccess />} />

        {/* Plan Routes */}
        <Route path="/detail/:planid" element={<PlanDetail />} />
        <Route path="/purchase/:planid" element={<PlanPurchase />} />
        <Route path="/retry/:planid" element={<PlanRetry />} />

        {/* Try Routes */}
        <Route path="/try/:planid" element={<TryDetail />} />

        {/* Setting Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/announcement/:id" element={<AnnouncementDetail />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: auto;
  height: 90vh;
`;

export default App;
