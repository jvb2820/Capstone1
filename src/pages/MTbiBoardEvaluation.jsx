import React, { useEffect, useState } from "react";

export default function MTbiBoardEvaluation() {
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
  // const [data, setData] = useState([
  //   {
  //     id: 123,
  //     status: "aaa",
  //     email: "email@gmail.com",
  //     // Add other properties here
  //   },
  //   // Add more applicant objects as needed
  // ]);

  // Define column titles
  // Define column titles
  const columnTitles = [
    { key: "id", title: "Id" },
    { key: "status", title: "Status" },
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
      <div className="rounded-lg  border-gray-200 w-11/12">
        <div>tbiboard evaluation results</div>
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search"
              className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="w-11/12">
          <div className="test1 rounded-t-lg">
            {/* <div className="border-4 border-red-500 bg-rose-100 overflow-x-auto rounded-lg shadow w-9/12"> */}
            {/* <table className="w-full border-collapse"> */}
            {/* <table className="w-full text-left"> */}
            <table className="max-w-screen-lg min-w-full divide-y divide-gray-200 bg-white text-sm text-left">
              <thead className="ltr:text-left rtl:text-right bg-gray-500">
                <tr>
                  <th className="px-4 py-2">
                    <label htmlFor="SelectAll" className="sr-only">
                      Select All
                    </label>
                    <input
                      type="checkbox"
                      id="SelectAll"
                      className="size-5 rounded border-gray-300"
                    />
                  </th>
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
                    <td className="px-4 py-2">
                      <label className="sr-only" htmlFor={`Row${applicant.id}`}>
                        Row {applicant.id}
                      </label>
                      <input
                        className="size-5 rounded border-gray-300"
                        type="checkbox"
                        id={`Row${applicant.id}`}
                      />
                    </td>

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
                        view feedback
                      </button>
                      <dialog id="acceptOfficer" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                          <h3 className="font-bold text-lg">create account</h3>
                          <p className="py-4">temporary</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
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
        </div>
        <div>
          <button>btn send certificate</button>
          <button>btn delete</button>
        </div>
      </div>
    </>
  );
}
