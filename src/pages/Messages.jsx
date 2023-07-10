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
        <div className="container mx-auto min-h-[87vh]">
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="cursor-pointer ">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>abcd@gmail.com</td>
        <td>7-10-2023</td>
      </tr>
      {/* row 2 */}
      <tr className=" cursor-pointer bg-gray-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>abcd@gmail.com</td>
        <td>7-10-2023</td>
      </tr>
      {/* row 3 */}
      <tr className="cursor-pointer">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>abcd@gmail.com</td>
        <td>7-10-2023</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
        <FooterDashboard />
      </div>
    </>
  );
};

export default Messages;
