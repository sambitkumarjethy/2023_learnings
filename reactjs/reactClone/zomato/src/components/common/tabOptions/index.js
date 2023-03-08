import React from "react";
const TabOptions = ({ activeTab, SetactiveTab }) => {
  return (
    <div>
      <button onClick={() => SetactiveTab("Night Life")}>On Click</button>
      This is Tab options
    </div>
  );
};

export default TabOptions;
