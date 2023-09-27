import React from "react";
import { useState } from "react";


import Container from "./components/Container";
import { GlobalContext } from "../src/GlobalContext";

// react routes
import { Routes, Route } from "react-router-dom";
import Settings from "./components/Settings";
import RootLayout from "./layout/RootLayout";

export default function App() {
  const [diaryList, setDiaryList] = useState([]);
  const [diary, setDiary] = useState({
    title: "",
    body: "",
  });

  const [isViewDiary, setIsViewDiary] = useState(null);
  const [editNewValue, setEditNewValue] = useState(false);
  const [isEditValue, setIsEditValue] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  const handleView = (item) => {
    setIsViewDiary(!isViewDiary);
    setIsViewDiary(item);
    setIsEditValue(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiary({ ...diary, [name]: value });
  };

  return (
    <GlobalContext.Provider
      value={{
        diary,
        setDiary,
        diaryList,
        setDiaryList,
        isViewDiary,
        setIsViewDiary,
        handleView,
        editNewValue,
        setEditNewValue,
        handleInputChange,
        isEditValue,
        setIsEditValue,
        isSettingsActive,
        setIsSettingsActive,
      }}
    >
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Container />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
}
