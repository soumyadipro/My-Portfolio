import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Craft visually stunning websites optimized for performance and user experience, tailored to your unique brand identity and business goals."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Data Analyst"
        subTitle=" Unlock the potential of your data with our expert analytics team, gaining actionable insights that inform strategic decision-making and fuel business growth."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Engage users on-the-go with sleek, intuitive mobile apps that captivate audiences and drive brand loyalty, designed for seamless functionality across platforms."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Automation Testing"
        subTitle="Unlock the potential of your data with our expert analytics team, gaining actionable insights that inform strategic decision-making and fuel business growth."
      />
    </div>
  );
};

export default MyServices;
