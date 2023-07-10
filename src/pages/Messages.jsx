import React from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import FooterDashboard from "../components/FooterDashboard";

const Messages = () => {
  return (
    <>
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      >
        <NavbarDashboard />
        <div className="flex flex-auto flex-col max-w-full"></div>
        <FooterDashboard />
      </div>
    </>
  );
};

export default Messages;
