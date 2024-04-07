import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function OfficerDashboard() {
  // Assuming you have a function to fetch data from the backend
  const fetchData = async () => {
    // Perform fetch request to get applicant data
    // For example:
    // const response = await fetch('api/applicants');
    // const data = await response.json();
    // setData(data);
    // In this example, setData is a function to update the state with fetched data
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  // Sample data structure assuming data fetched from the backend
  const [data, setData] = useState([
    {
      email: "email@gmail.com",
      // Add other properties here
    },
    // Add more applicant objects as needed
  ]);
  const columnTitles = [
    { key: "email", title: "Email" },
    { key: "project_title", title: "Project Title/Startup Name" },
    { key: "startup_description", title: "Startup Description" },
    { key: "team_composition", title: "Team Composition" },
    { key: "about_product_solution", title: "About the Product/Solution" },
    {
      key: "historical_timeline",
      title: "Historical Timeline of Product/Project Development",
    },
    { key: "competitive_advantage", title: "Competitive Advantage Analysis" },
    {
      key: "intellectual_property_status",
      title: "Intellectual Property Status",
    },
    { key: "objectives", title: "Objectives" },
    { key: "scope_of_proposal", title: "Scope of the Proposal" },
    {
      key: "methodology_expected_outputs",
      title: "Methodology and Expected Outputs",
    },
    { key: "curriculum_vitae", title: "Curriculum Vitae" },
    { key: "supporting_materials", title: "Links to Any Supporting Materials" },
    { key: "group_name", title: "Group Name" },
    { key: "team_leader_member_1", title: "Team Leader - Team Member 1" },
    { key: "team_leader_mobile", title: "Team Leader Mobile Number" },
    { key: "team_leader_email", title: "Team Leader Email Address" },
    { key: "team_member_2", title: "Team Member 2" },
    { key: "team_member_3", title: "Team Member 3" },
    { key: "team_member_4", title: "Team Member 4" },
    { key: "team_member_5", title: "Team Member 5" },
    { key: "team_member_6", title: "Team Member 6" },
    { key: "university", title: "University" },
    { key: "technology", title: "Technology" },
    { key: "product_development", title: "Product Development" },
    { key: "competitive_landscape", title: "Competitive Landscape" },
    { key: "product_design", title: "Product Development/Design" },
    { key: "team", title: "Team" },
    { key: "go_to_market", title: "Go-to-Market" },
    { key: "go_to_market_1", title: "Go-to-Market 1" },
    { key: "eligibility_agreement", title: "Eligibility and Agreement" },
    {
      key: "commitment_verification_form",
      title: "Applicant Commitment Verification Form",
    },
  ];
  return (
    <>
      {/* <div className="border-2 border-rose-500 h-screen bg-white flex justify-start items-center flex-col justify-items-center text-center w-screen"> */}
      {/* <div> */}
      <div className="pt-32 h-screen bg-white  flex justify-start items-center flex-col justify-items-center text-center">
        <div className="border-2 border-green-500 p-5">
          <h1 className="text-xl mb-2 text-center">
            review applicant documents
          </h1>
        </div>

        {/* Apply overflow-x-scroll to the div containing the table */}
        {/* <div className="border-2 border-green-500 overflow-x-scroll w-9/12"> */}
        <div className="w-11/12">
          <div className="test1 rounded-t-lg">
            {/* <div className="border-4 border-red-500 bg-rose-100 overflow-x-auto rounded-lg shadow w-9/12"> */}
            {/* <table className="w-full border-collapse"> */}
            {/* <table className="w-full text-left"> */}
            <table className="max-w-screen-lg min-w-full divide-y divide-gray-200 bg-white text-sm text-left">
              <thead className="ltr:text-left rtl:text-right bg-gray-500">
                <tr>
                  {columnTitles.map((column, index) => (
                    <React.Fragment key={column.key}>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {column.title}
                      </th>
                      {index === columnTitles.length - 1 && (
                        <th className="" colSpan={2}></th>
                      )}
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-200">
                {data.map((applicant) => (
                  <tr key={applicant.id}>
                    {columnTitles.map((column) => (
                      <td
                        key={column.key}
                        className="whitespace-nowrap px-4 py-2 text-gray-700"
                      >
                        {applicant[column.key]}
                      </td>
                    ))}
                    <td className="">
                      <button
                        className="btn btn-neutral"
                        onClick={() =>
                          document.getElementById("acceptOfficer").showModal()
                        }
                      >
                        accept
                      </button>
                      <dialog id="acceptOfficer" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                          <h3 className="font-bold text-lg">acceptOfficer!</h3>
                          <p className="py-4">
                            Click the button below to close
                          </p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                    <td className="">
                      <button
                        className="btn btn-neutral"
                        onClick={() =>
                          document.getElementById("declineOfficer").showModal()
                        }
                      >
                        decline
                      </button>
                      <dialog id="declineOfficer" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                          <h3 className="font-bold text-lg">declineOfficer!</h3>
                          <p className="py-4">
                            Click the button below to close
                          </p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">send</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-2 border-rose-500 absolute bottom-0 right-0">
            <Link to="/officer">logout</Link>
          </div>
        </div>
      </div>
    </>
  );
}
