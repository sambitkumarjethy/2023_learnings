import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DinningOut from "../../components/dinningOut";
import NightLife from "../../components/nightLife";
const HomePage = () => {
  const [activeTab, SetactiveTab] = useState("Dinning Out");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} SetactiveTab={SetactiveTab} />
      {getCurrentScreen(activeTab)}
      <Footer />
    </div>
  );
};
const getCurrentScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dinning Out":
      return <DinningOut />;
    case "Night Life":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
