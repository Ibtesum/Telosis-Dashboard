import React from "react";
import FooterDashboard from "../components/FooterDashboard";
import NavbarDashboard from "../components/NavbarDashboard";
import { carrers } from "../dummyConent/carrers";



const Career = () => {
  return (
    <>
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      >
        <NavbarDashboard />
        <div className="container mx-auto min-h-[87vh]">
          <div className="flex flex-col gap-y-4 py-10">
          {
            carrers.map((item,index)=><CarrersCard title={item.title} catogary={item.category} location={item.location}/>)
          }
          </div>
        

        </div>
        <FooterDashboard />
      </div>
    </>
  );
};

export const CarrersCard =({title,catogary,location})=>{
  return (
   
    <div className="w-6/12 mx-auto bg-gray-100 p-5 rounded-full bg-red-200 flex justify-around items-center gap-x-4 cursor-pointer capitalize">
      <h2>Job Title: {title}</h2>
      <h2>Location:{location}</h2>
      <h2>Job Category: {catogary}</h2>

    </div>
   
  )
}

export default Career;
