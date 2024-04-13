import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function OfficerDashboard() {
  // Assuming you have a function to fetch data from the backend
  // const fetchData = async () => {
  //   // Perform fetch request to get applicant data
  //   // For example:
  //   // const response = await fetch('api/applicants');
  //   // const data = await response.json();
  //   // setData(data);
  //   // In this example, setData is a function to update the state with fetched data
  // };
  useEffect(() => {
    loadApplicants();
  }, []);

  const loadApplicants = async () => {
    const result = await axios.get("http://localhost:8080/applicants", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setApplicants(result.data);
    }
  };
  // Sample data structure assuming data fetched from the backend
  const [applicants, setApplicants] = useState([
    // {
    //   email: "email@gmail.com",
    //   // Add other properties here
    // },
    // Add more applicant objects as needed
  ]);
  // const columnTitles = [
  //   { key: "email", title: "Email" },
  //   { key: "project_title", title: "Project Title/Startup Name" },
  //   { key: "startup_description", title: "Startup Description" },
  //   { key: "team_composition", title: "Team Composition" },
  //   { key: "about_product_solution", title: "About the Product/Solution" },
  //   {
  //     key: "historical_timeline",
  //     title: "Historical Timeline of Product/Project Development",
  //   },
  //   { key: "competitive_advantage", title: "Competitive Advantage Analysis" },
  //   {
  //     key: "intellectual_property_status",
  //     title: "Intellectual Property Status",
  //   },
  //   { key: "objectives", title: "Objectives" },
  //   { key: "scope_of_proposal", title: "Scope of the Proposal" },
  //   {
  //     key: "methodology_expected_outputs",
  //     title: "Methodology and Expected Outputs",
  //   },
  //   { key: "curriculum_vitae", title: "Curriculum Vitae" },
  //   { key: "supporting_materials", title: "Links to Any Supporting Materials" },
  //   { key: "group_name", title: "Group Name" },
  //   { key: "team_leader_member_1", title: "Team Leader - Team Member 1" },
  //   { key: "team_leader_mobile", title: "Team Leader Mobile Number" },
  //   { key: "team_leader_email", title: "Team Leader Email Address" },
  //   { key: "team_member_2", title: "Team Member 2" },
  //   { key: "team_member_3", title: "Team Member 3" },
  //   { key: "team_member_4", title: "Team Member 4" },
  //   { key: "team_member_5", title: "Team Member 5" },
  //   { key: "team_member_6", title: "Team Member 6" },
  //   { key: "university", title: "University" },
  //   { key: "technology", title: "Technology" },
  //   { key: "product_development", title: "Product Development" },
  //   { key: "competitive_landscape", title: "Competitive Landscape" },
  //   { key: "product_design", title: "Product Development/Design" },
  //   { key: "team", title: "Team" },
  //   { key: "go_to_market", title: "Go-to-Market" },
  //   { key: "go_to_market_1", title: "Go-to-Market 1" },
  //   { key: "eligibility_agreement", title: "Eligibility and Agreement" },
  //   {
  //     key: "commitment_verification_form",
  //     title: "Applicant Commitment Verification Form",
  //   },
  // ];
  return (
    <>
      {/* <div className="border-2 border-rose-500 h-screen bg-white flex justify-start items-center flex-col justify-items-center text-center w-screen"> */}
      {/* <div> */}
      <div className="pt-32 h-screen bg-white  flex justify-start items-center flex-col justify-items-center text-center">
        <div className="p-5">
          <h1 className="text-xl mb-2 text-center text-black">
            REVIEW APPLICANT DOCUMENTS
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
              <thead className="ltr:text-left rtl:text-right bg-tanglow">
                <tr>
                  {/* {columnTitles.map((column, index) => ( */}
                  {/* <React.Fragment key={column.key}> */}
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {/* {column.title} */}
                    ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Project Title/Startup Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Startup Description
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Composition
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    About the Product/Solution
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Historical Timeline of Product/Project Development
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Competitive Advantage Analysis
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Intellectual Property Status
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Objectives
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Scope of the Proposal
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Methodology and Expected Outputs
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Curriculum Vitae
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Links to Any Supporting Materials
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Group Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Leader - Team Member 1
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Leader Mobile Number
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Leader Email Address
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Member 2
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Member 3
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Member 4
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Member 5
                  </th>
                  {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team Member 6
                  </th> */}
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    University
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Technology
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Product Development
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Competitive Landscape
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Product Development/Design
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Team
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Go-to-Market
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Manufacturing Supply Chain
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Eligibility and Agreement
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Applicant Commitment Verification Form
                  </th>
                  {/* {index === columnTitles.length - 1 && ( */}
                  <th className="" colSpan={2}></th>
                  {/* )} */}
                  {/* </React.Fragment> */}
                  {/* ))} */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applicants.map((applicant, index) => (
                  <tr key={applicant.id}>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    {/* {columnTitles.map((column) => ( */}
                    <td
                      // key={column.key}
                      className="whitespace-nowrap px-4 py-2 text-gray-700"
                    >
                      {applicant.email}
                      {/* {applicant[column.key]} */}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.projectTitle}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.startupProjectDescription}
                    </td>
                    <td className="whitespace-pre-line px-4 py-2 text-gray-700">{`${applicant.teamCompositionName1}\n${applicant.teamCompositionRole1}\n${applicant.teamCompositionName2}\n${applicant.teamCompositionRole2}\n${applicant.teamCompositionName3}\n${applicant.teamCompositionRole3}`}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.startupProjectDescription}
                    </td>
                    <td className="whitespace-pre-line px-4 py-2 text-gray-700">{`${applicant.historicalDate1}\n${applicant.historicalKeyActivities1}\n${applicant.historicalDate2}\n${applicant.historicalKeyActivities2}\n${applicant.historicalDate3}\n${applicant.historicalKeyActivities3}\n${applicant.historicalDate4}\n${applicant.historicalKeyActivities4}\n${applicant.historicalDate5}\n${applicant.historicalKeyActivities5}`}</td>
                    <td className="whitespace-pre-line py-2 text-gray-700">{`${applicant.competitiveFactors_1}\n${applicant.nameCompetitionAlternative1_1}\n${applicant.nameCompetitionAlternative2_1}\n${applicant.nameCompetitionAlternative3_1}\n${applicant.startupProjectName_1}\n${applicant.competitiveFactors_2}\n${applicant.nameCompetitionAlternative1_2}\n${applicant.nameCompetitionAlternative2_2}\n${applicant.nameCompetitionAlternative3_2}\n${applicant.startupProjectName_2}`}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.intellectualPropertyStatus}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.objectives}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.scopeProposal}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.methodologyExpectedOutputs}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.curriculumVitaeProjectLeader}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.linksToAnySupportingMaterials}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.groupName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamLeader}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamsLeaderMobileNumber}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamLeaderEmailAddress}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamMember2}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamMember3}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamMember4}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.teamMember5}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.university}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.technology}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.productDevelopment}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.competitiveLandscape}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.productDevelopmentDesign}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.team}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.goToMarket}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.manufacturingSupplyChain}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {applicant.eligibilityAgreement}
                    </td>
                    <td className="whitespace-pre-line px-4 py-2 text-gray-700 ">
                      {`${applicant.applicantCommitmentVerification1}\n${applicant.applicantCommitmentVerification2}\n${applicant.applicantCommitmentVerification3}\n${applicant.applicantCommitmentVerification4}`}
                    </td>

                    {/* ))} */}
                    <td className="">
                      <button
                        className="text-black hover:bg-gold btn btn-outline btn-sm ml-2 mt-2 mb-2"
                        onClick={() =>
                          document.getElementById("acceptOfficer").showModal()
                        }
                      >
                        Accept
                      </button>
                      <dialog id="acceptOfficer" className="modal ">
                        <div className="modal-box w-11/12 max-w-5xl bg-white">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-transparent hover:bg-slate-200 hover:text-black">
                              ✕
                            </button>
                          </form>
                          <h3 className=" text-2xl text-center text-black font-bold">
                            ACCEPTED!
                          </h3>
                          <p className="py-4 text-center text-lg text-black">
                            Sent to be reviewed by the TBI Board
                          </p>
                        </div>
                      </dialog>
                    </td>
                    <td className="">
                      <button
                        className="text-black hover:bg-gold btn btn-outline  btn-sm ml-3 mr-4 mt-2 mb-2"
                        onClick={() =>
                          document.getElementById("declineOfficer").showModal()
                        }
                      >
                        Decline
                      </button>

                      <dialog id="declineOfficer" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-white ">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-transparent hover:bg-slate-200 hover:text-black">
                              ✕
                            </button>
                          </form>
                          <h3 className=" text-2xl text-black ">
                            Input Feedback
                          </h3>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs mt-5 ml-3 bg-transparent"
                          />
                          <p className="py-4 text-lg text-black">
                            Qualified for Reapplication?
                          </p>

                          <div className=" form-control w-20">
                            <label className="label content-center text-black">
                              <input
                                type="radio"
                                name="radio-10"
                                className="radio checked:bg-tanglow border-black"
                              />
                              YES
                            </label>
                          </div>

                          <div className="border-2 border-rose-500 form-control w-20">
                            <label className="label content-center text-black">
                              <input
                                type="radio"
                                name="radio-10"
                                className="radio checked:bg-tanglow border-black"
                              />
                              NO
                            </label>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-lg absolute font-bold bottom-8 right-12 text-black">
            <Link to="/officer">logout</Link>
          </div>
        </div>
      </div>
    </>
  );
}
