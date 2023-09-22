import React from "react";
import { useState } from "react";

import SideNavBar from "./components/SideNavBar";
import SideContainer from "./SideContainer";
import { GlobalContext } from "../src/GlobalContext";

export default function App() {
  const [diaryList, setDiaryList] = useState([]);
  const [diary, setDiary] = useState({
    title: "",
    body: "",
  });


  return (
    <div className="w-[300px] border-r-2 relative h-screen">
      <GlobalContext.Provider
        value={{ diary, setDiary, diaryList, setDiaryList }}
      >
        <SideNavBar />
        <SideContainer />
      </GlobalContext.Provider>
    </div>
  );
}
