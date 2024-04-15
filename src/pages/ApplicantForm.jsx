import { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ApplicantForm() {
  const [isVisible, setIsVisible] = useState(false);

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 40;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  const [applicant, setApplicant] = useState({
    email: "",
    consent: "",
    projectTitle: "",
    startupProjectDescription: "",
    teamCompositionName1: "",
    teamCompositionRole1: "",
    teamCompositionName2: "",
    teamCompositionRole2: "",
    teamCompositionName3: "",
    teamCompositionRole3: "",
    problemStatement: "",
    targetMarket: "",
    solutionDescription: "",
    historicalDate1: "",
    historicalKeyActivities1: "",
    historicalDate2: "",
    historicalKeyActivities2: "",
    historicalDate3: "",
    historicalKeyActivities3: "",
    historicalDate4: "",
    historicalKeyActivities4: "",
    historicalDate5: "",
    historicalKeyActivities5: "",
    nameCompetitionAlternative1_1: "",
    nameCompetitionAlternative2_1: "",
    nameCompetitionAlternative3_1: "",
    startupProjectName_1: "",
    nameCompetitionAlternative1_2: "",
    nameCompetitionAlternative2_2: "",
    nameCompetitionAlternative3_2: "",
    startupProjectName_2: "",
    intellectualPropertyStatus: "",
    objectives: "",
    scopeProposal: "",
    methodologyExpectedOutputs: "",
    curriculumVitaeProjectLeader: "",
    linksToAnySupportingMaterials: "",
    groupName: "",
    teamLeader: "",
    teamsLeaderMobileNumber: "",
    teamLeaderEmailAddress: "",
    teamMember2: "",
    teamMember3: "",
    teamMember4: "",
    teamMember5: "",
    university: "",
    technology: "",
    productDevelopment: "",
    competitiveLandscape: "",
    productDevelopmentDesign: "",
    team: "",
    goToMarket: "",
    manufacturingSupplyChain: "",
    eligibilityAgreement: "",
    applicantCommitmentVerification1: "",
    applicantCommitmentVerification2: "",
    applicantCommitmentVerification3: "",
    applicantCommitmentVerification4: "",
  });
  // const {
  //   email,
  //   projectTitle,
  //   startupProjectDescription,
  //   teamCompositionName1,
  //   teamCompositionRole1,
  //   teamCompositionName2,
  //   teamCompositionRole2,
  //   teamCompositionName3,
  //   teamCompositionRole3,
  //   problemStatement,
  //   targetMarket,
  //   solutionDescription,
  //   historicalDate1,
  //   historicalKeyActivities1,
  //   historicalDate2,
  //   historicalKeyActivities2,
  //   historicalDate3,
  //   historicalKeyActivities3,
  //   historicalDate4,
  //   historicalKeyActivities4,
  //   historicalDate5,
  //   historicalKeyActivities5,
  //   competitiveFactors_1,
  //   nameCompetitionAlternative1_1,
  //   nameCompetitionAlternative2_1,
  //   nameCompetitionAlternative3_1,
  //   startupProjectName_1,
  //   competitiveFactors_2,
  //   nameCompetitionAlternative1_2,
  //   nameCompetitionAlternative2_2,
  //   nameCompetitionAlternative3_2,
  //   startupProjectName_2,
  //   intellectualPropertyStatus,
  //   objectives,
  //   scopeProposal,
  //   methodologyExpectedOutputs,
  //   curriculumVitaeProjectLeader,
  //   linksToAnySupportingMaterials,
  //   groupName,
  //   teamLeader,
  //   teamsLeaderMobileNumber,
  //   teamLeaderEmailAddress,
  //   teamMember2,
  //   teamMember3,
  //   teamMember4,
  //   teamMember5,
  //   university,
  //   technology,
  //   productDevelopment,
  //   competitiveLandscape,
  //   productDevelopmentDesign,
  //   team,
  //   goToMarket,
  //   manufacturingSupplyChain,
  //   eligibilityAgreement,
  //   applicantCommitmentVerification1,
  //   applicantCommitmentVerification2,
  //   applicantCommitmentVerification3,
  //   applicantCommitmentVerification4,
  // } = applicant;
  const handleInputChange = (e) => {
    setApplicant({
      ...applicant,
      [e.target.name]: e.target.value,
    });
  };
  const saveApplicant = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/applicants", applicant);
    setFormSubmitted(true);
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);
  return (
    <>
      <div className="bg-gradient-to-r from-formbg-dark to-formbg-light flex md:flex-row-reverse w-full">
        <img
          src="../public/images/honeycomb.png"
          className="mix-blend-overlay absolute top-0 right-0 md:fixed pointer-events-none z-0"
        />
        {/* <div className="z-50 border-2 border-green-500 xl:fixed xl:block text-black right-0 hidden w-96 pt-20"> */}
        <div className="font-secondary font-normal text-black pt-20 mt-14 md:w-3/12 md:fixed md:block hidden">
          <div className="mb-4 font-semibold">Registration Form</div>
          <ul>
            <li className="mb-4 ml-2 hover:text-white">
              <a
                onClick={() => smoothScrollToSection("capsuleProposal")}
                className="cursor-pointer"
              >
                I. Launchlab Capsule Proposal
              </a>
            </li>
            <li className="mb-4 ml-2 hover:text-white">
              <a
                onClick={() =>
                  smoothScrollToSection("aboutProposedAcceleration")
                }
                className="cursor-pointer"
              >
                II. About the Proposed Acceleration
              </a>
            </li>
            <li className="mb-4 ml-2 hover:text-white">
              <a
                onClick={() => smoothScrollToSection("cvProjectLeader")}
                className="cursor-pointer"
              >
                III. Curriculum Vitae
              </a>
            </li>
          </ul>
        </div>
        <img
          src="../public/images/circle.png"
          className="mix-blend-overlay w-40 h-40 absolute top-14 left-4 md:fixed pointer-events-none z-0"
        />
        <img
          src="../public/images/cone.png"
          className="mix-blend-overlay w-40 h-40 absolute top-4 left-1/2 right-0 md:fixed pointer-events-none z-0"
        />
        <img
          src="../public/images/cylinder.png"
          className="mix-blend-overlay w-40 h-40 absolute bottom-10 left-16 md:fixed pointer-events-none z-0"
        />
        <img
          src="../public/images/curl.png"
          className="mix-blend-overlay w-40 h-40 absolute bottom-0 left-1/2 pt-10 right-0 md:fixed pointer-events-none z-0"
        />
        <div className="w-full p-20 mt-14">
          <form onSubmit={(e) => saveApplicant(e)}>
            {/* <div className="border-4 border-red-500 bg-rose p-10 sm:p-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full"> */}
            {/* <div className="border-4 border-pink-500 w-full xl:w-9/12 bg-white mr-96"> */}
            <div className="border rounded-lg border-black bg-white md:w-9/12  relative z-10">
              <img
                src="../public/images/wilBlackBox.png"
                className="h-20 ml-auto mr-4 mt-4 pointer-events-none"
              />
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src="../public/images/launchlab.png"
                  className="w-64 h-20 align-middles mb-8 -mt-8 pointer-events-none"
                ></img>
                <h1 className="font-secondary text-black font-semibold text-2xl -mt-8 mb-6 -ml-6">
                  Registration Form
                </h1>
              </div>
              <p className="font-secondary text-justify mb-8 ml-6 text-black mr-6">
                Thank you for your interest in participating the LaunchLab
                Program of DASIG. This program is spearheaded by CIT-U Wildcat
                Innovation Labs. Please complete the following form to submit
                your capsule proposal for consideration.
                {/* <hr className="mt-12" /> */}
              </p>
              <div className="ml-6 mt-14">
                <label
                  htmlFor="email"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2 className="font-secondary text-black mb-6">Email</h2>
                  <input
                    onChange={(e) => handleInputChange(e)}
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email here"
                    className="font-secondary text-black w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-14"
                  />
                  <br />
                </label>
                <hr className="mr-6" />
              </div>
              <p className="font-secondary text-black text-justify mt-10 mb-8 ml-6 mr-8">
                By accomplishing this form, the following personal information
                will be collected including, startup team members names,
                personal email address, mobile phone number and other relevant
                information. The personal information you will provide in this
                form will be used within LaunchLab Program, DASIG consortium
                committee and will not be shared with any outside parties unless
                you have prior written consent. Development and Acceleration
                Support for Innovation Growth (DASIG) respects your rights as a
                data subject under the Data Privacy Act.
              </p>
              <p className="font-secondary text-black text-justify mt-8 mb-8 ml-6 mr-8">
                If you have further questions and concerns regarding the
                processing of your personal information, you are welcome to
                contact our team, Engr. Ralph Laviste at
                <a
                  href="mailto:ralph.laviste@cit.edu"
                  className="font-semibold text-blue-700"
                >
                  ralph.laviste@cit.edu
                </a>
                and
                <a
                  href="mailto:rlaviste@gmail.com"
                  className="font-semibold text-blue-700"
                >
                  rlaviste@gmail.com
                </a>
                , and Engr. Jurydel Rama at
                <a
                  href="mailto:jurydel.rama@cit.edu"
                  className="font-semibold text-blue-700"
                >
                  jurydel.rama@cit.edu
                </a>
                and
                <a
                  href="mailto:jurydelrama@gmail.com"
                  className="font-semibold text-blue-700"
                >
                  jurydelrama@gmail.com
                </a>
                .
              </p>
              <p className="font-secondary text-black text-justify mt-8 mb-8 ml-6 mr-8">
                In compliance with the Data Privacy Act (DPA) of 2012, also
                known as the Republic Act of 10173 (RA 10173), I agree and
                authorize the Development and Acceleration Support for
                Innovation Growth (DASIG) consortium members to use the personal
                information for the purpose of LaunchLab programs and
                initiatives. I also acknowledge and warrant that I have acquired
                the consent from all parties relevant to this consent and hold
                free and harmless and indemnify Development and Acceleration
                Support for Innovation Growth (DASIG) from any complaint, suit,
                or damages which any party may file or claim in relation to my
                consent.
              </p>
              <div className="flex flex-col items-start">
                <label className="mt-8 ml-6 mb-8 flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    value="I AGREE"
                    className="radio"
                    // onChange={(e) => handleInputChange(e)}
                  />
                  <span className="text-black font-secondary ml-4">
                    I AGREE
                  </span>
                </label>
                <label className="ml-6 mb-8 flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    value="I DO NOT AGREE"
                    className="radio"
                  />
                  <span className="text-black font-secondary ml-4">
                    I DO NOT AGREE
                  </span>
                </label>
              </div>
              <hr className="mt-10 mb-10 ml-6 mr-6" />
              <div className="ml-6">
                <label
                  htmlFor="projectTitle"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2 className="font-secondary text-black mt-16 mb-6">
                    Project Title/Startup Name
                  </h2>

                  <input
                    onChange={(e) => handleInputChange(e)}
                    required
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    placeholder="Enter your project title here"
                    className="font-secondary text-black w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-14"
                  />
                  <br />
                </label>
              </div>
              <div className="">
                <div className="0" id="capsuleProposal">
                  <div className="font-secondary text-black ml-6 mr-6 mt-10">
                    <h2 className="font-semibold">
                      I. Fill up Launchlab Capsule Proposal
                    </h2>
                    <div className="mt-2">
                      <p className="mb-4">A. Startup/Project Description</p>
                      <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
                        <textarea
                          onChange={(e) => handleInputChange(e)}
                          required
                          id="startupProjectDescription"
                          name="startupProjectDescription"
                          className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                          rows="6"
                          placeholder="Type something here..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p>B. Team Composition</p>
                      <h2 className="mt-2 mb-8">Name</h2>

                      <div className="mb-2">
                        <label
                          htmlFor="teamCompositionName1"
                          className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
                        >
                          <input
                            onChange={(e) => handleInputChange(e)}
                            type="text"
                            id="teamCompositionName1"
                            name="teamCompositionName1"
                            placeholder="Member name"
                            className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
                          />
                        </label>
                        <label
                          htmlFor="teamCompositionRole1"
                          className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                        >
                          <input
                            onChange={(e) => handleInputChange(e)}
                            type="text"
                            id="teamCompositionRole1"
                            name="teamCompositionRole1"
                            placeholder="Input role"
                            className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                          />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="teamCompositionName2"
                          className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
                        >
                          <input
                            onChange={(e) => handleInputChange(e)}
                            type="text"
                            id="teamCompositionName2"
                            name="teamCompositionName2"
                            placeholder="Member name"
                            className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
                          />
                        </label>
                        <label
                          htmlFor="teamCompositionRole2"
                          className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                        >
                          <input
                            onChange={(e) => handleInputChange(e)}
                            type="text"
                            id="teamCompositionRole2"
                            name="teamCompositionRole2"
                            placeholder="Input role"
                            className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                          />
                        </label>
                      </div>
                      <label
                        htmlFor="teamCompositionName3"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
                      >
                        <input
                          onChange={(e) => handleInputChange(e)}
                          type="text"
                          id="teamCompositionName3"
                          name="teamCompositionName3"
                          placeholder="Member name"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
                        />
                      </label>
                      <label
                        htmlFor="teamCompositionRole3"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <input
                          onChange={(e) => handleInputChange(e)}
                          type="text"
                          id="teamCompositionRole3"
                          name="teamCompositionRole3"
                          placeholder="Input role"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                        />
                      </label>
                    </div>

                    <div className="mt-16">
                      <p>C. About Product/Solution</p>
                      <div>
                        <p>1. Problem Statement</p>
                        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
                          <textarea
                            onChange={(e) => handleInputChange(e)}
                            id="problemStatement"
                            name="problemStatement"
                            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                            rows="6"
                            placeholder="Type something here..."
                          ></textarea>
                        </div>
                      </div>
                      <div>
                        <p>2. Target Market</p>
                        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
                          <textarea
                            onChange={(e) => handleInputChange(e)}
                            id="targetMarket"
                            name="targetMarket"
                            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                            rows="6"
                            placeholder="Type something here..."
                          ></textarea>
                        </div>
                      </div>
                      <div>
                        <p>3. solution Description</p>
                        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
                          <textarea
                            onChange={(e) => handleInputChange(e)}
                            id="solutionDescription"
                            name="solutionDescription"
                            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                            rows="6"
                            placeholder="Type something here..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 overflow-x-auto">
                      <p className="mb-4">
                        D. Historical Timeline of the Product/Project
                        Development
                      </p>
                      <div>
                        <p className="mt-6 mb-4 text-gray-500">
                          Start from the most recent
                        </p>
                        <div className="border-none border-gray-500">
                          <table className="w-full">
                            <thead>
                              <tr>
                                <th className="font-semibold border border-gray-500 px-4 py-2">
                                  Month-Year
                                </th>
                                <th className="font-semibold border border-gray-500 px-4 py-2">
                                  Key Activities or Milestones
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  onChange={(e) => handleInputChange(e)}
                                  id="historicalDate1"
                                  name="historicalDate1"
                                  className="border border-gray-500 px-4 py-2"
                                >
                                  <p>month</p>
                                  <p>year</p>
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                  <textarea
                                    onChange={(e) => handleInputChange(e)}
                                    name="historicalKeyActivities1"
                                    id="historicalKeyActivities1"
                                    placeholder="Enter key activities or milestones here"
                                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                  ></textarea>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  onChange={(e) => handleInputChange(e)}
                                  id="historicalDate2"
                                  name="historicalDate2"
                                  className="border border-gray-500 px-4 py-2"
                                >
                                  <p>month</p>
                                  <p>year</p>
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                  <textarea
                                    onChange={(e) => handleInputChange(e)}
                                    name="historicalKeyActivities2"
                                    id="historicalKeyActivities2"
                                    placeholder="Enter key activities or milestones here"
                                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                  ></textarea>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  onChange={(e) => handleInputChange(e)}
                                  id="historicalDate3"
                                  name="historicalDate3"
                                  className="border border-gray-500 px-4 py-2"
                                >
                                  <p>month</p>
                                  <p>year</p>
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                  <textarea
                                    onChange={(e) => handleInputChange(e)}
                                    name="historicalKeyActivities3"
                                    id="historicalKeyActivities3"
                                    placeholder="Enter key activities or milestones here"
                                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                  ></textarea>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  onChange={(e) => handleInputChange(e)}
                                  id="historicalDate4"
                                  name="historicalDate4"
                                  className="border border-gray-500 px-4 py-2"
                                >
                                  <p>month</p>
                                  <p>year</p>
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                  <textarea
                                    onChange={(e) => handleInputChange(e)}
                                    name="historicalKeyActivities4"
                                    id="historicalKeyActivities4"
                                    placeholder="Enter key activities or milestones here"
                                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                  ></textarea>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  onChange={(e) => handleInputChange(e)}
                                  id="historicalDate5"
                                  name="historicalDate5"
                                  className="border border-gray-500 px-4 py-2"
                                >
                                  <p>month</p>
                                  <p>year</p>
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                  <textarea
                                    onChange={(e) => handleInputChange(e)}
                                    name="historicalKeyActivities5"
                                    id="historicalKeyActivities5"
                                    placeholder="Enter key activities or milestones here"
                                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                  ></textarea>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 overflow-x-auto">
                      <p className="mb-4">E. Competitive Advantage Analysis</p>
                      <div>
                        <p className="text-gray-500 mt-6 mb-4">
                          Add more applicable competitive factors
                        </p>
                        <table className="w-full table-auto">
                          <thead>
                            <tr>
                              <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                                Competitive Factors
                              </th>
                              <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                                Name of Competition 1/ Alternative 1
                              </th>
                              <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                                Name of Competition 2/ Alternative 2
                              </th>
                              <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                                Name of Competition 3/ Alternative 3
                              </th>
                              <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                                Your startup/ Project Name
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-semibold border border-gray-500 px-4 py-2">
                                <p>Product or Service offering</p>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="nameCompetitionAlternative1_1"
                                  id="nameCompetitionAlternative1_1"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="nameCompetitionAlternative2_1"
                                  id="nameCompetitionAlternative2_1"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="nameCompetitionAlternative3_1"
                                  id="nameCompetitionAlternative3_1"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="startupProjectName_1"
                                  id="startupProjectName_1"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold border border-gray-500 px-4 py-2">
                                <p>Pricing strategy</p>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="nameCompetitionAlternative1_2"
                                  id="nameCompetitionAlternative1_2"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="nameCompetitionAlternative2_2"
                                  id="nameCompetitionAlternative2_2"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="nameCompetitionAlternative3_2"
                                  id="nameCompetitionAlternative3_2"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                <textarea
                                  onChange={(e) => handleInputChange(e)}
                                  name="startupProjectName_2"
                                  id="startupProjectName_2"
                                  placeholder="Enter key activities or milestones here"
                                  className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="mt-16">
                      <p className="mb-4">
                        F. Intellectual Property Status (if applicable)
                      </p>
                      <div>
                        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                          <textarea
                            onChange={(e) => handleInputChange(e)}
                            name="intellectualPropertyStatus"
                            id="intellectualPropertyStatus"
                            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                            rows="6"
                            placeholder="Type something here..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="" id="aboutProposedAcceleration">
                  <div className="font-secondary text-black p ml-6 mr-6 mt-16">
                    <h2 className="font-semibold mb-6">
                      II. About the Proposed Acceleration
                    </h2>
                    <div className="mb-4">
                      <p className="mb-4">A. Objectives</p>
                      <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <textarea
                          onChange={(e) => handleInputChange(e)}
                          name="objectives"
                          id="objectives"
                          className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                          rows="6"
                          placeholder="Type something here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-4">B. Scope of the proposal</p>
                      <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <textarea
                          onChange={(e) => handleInputChange(e)}
                          name="scopeProposal"
                          id="scopeProposal"
                          className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                          rows="6"
                          placeholder="Type something here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="">
                      <p className="mb-4">
                        C. Methodology and expected outputs
                      </p>
                      <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <textarea
                          onChange={(e) => handleInputChange(e)}
                          name="methodologyExpectedOutputs"
                          id="methodologyExpectedOutputs"
                          className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                          rows="6"
                          placeholder="Type something here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="" id="cvProjectLeader">
                  <div className="mt-16 font-secondary text-black p ml-6 mr-6">
                    <h2 className="font-semibold mb-8">
                      III. Curriculum Vitae of the Project Leader
                    </h2>
                    <div className="relative my-6 inline-flex sm:w-96 w-full items-center gap-2 rounded border border-slate-200 text-sm text-slate-500">
                      <input
                        onChange={(e) => handleInputChange(e)}
                        name="curriculumVitaeProjectLeader"
                        id="curriculumVitaeProjectLeader"
                        type="file"
                        className="peer order-2 [&::file-selector-button]:hidden"
                      />
                      <label
                        htmlFor="curriculumVitaeProjectLeader"
                        className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-black border border-black px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-tanglow hover:border-tanglow hover:text-black focus-visible:outline-none"
                      >
                        Upload a file
                      </label>
                    </div>
                    <hr className="mt-10" />
                    <div className="mt-14 mb-14">
                      <h2 className="mb-4">
                        Links to any supporting materials (e.g., website,
                        explainer video, presentation)
                      </h2>
                      <label
                        htmlFor="linksToAnySupportingMaterials"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="linksToAnySupportingMaterials"
                          id="linksToAnySupportingMaterials"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <br />
                      </label>
                    </div>
                    <div className="">
                      <h2 className="font-semibold mt-8 mb-8">Group Info</h2>
                      <label
                        htmlFor="groupName"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-4">Group Name</h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="groupName"
                          id="groupName"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamLeader"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">
                          Team Leader - Team Member 1 (Last Name, First Name)
                        </h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="teamLeader"
                          id="teamLeader"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamsLeaderMobileNumber"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">Team Leaders Mobile Number</h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="teamsLeaderMobileNumber"
                          id="teamsLeaderMobileNumber"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamLeaderEmailAddress"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">Team Leaders Email Address</h2>

                        <input
                          type="email"
                          onChange={(e) => handleInputChange(e)}
                          name="teamLeaderEmailAddress"
                          id="teamLeaderEmailAddress"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamMember2"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">
                          Team Member 2 (Last Name, First Name)
                        </h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="teamMember2"
                          id="teamMember2"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamMember3"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">
                          Team Member 3 (Last Name, First Name)
                        </h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="teamMember3"
                          id="teamMember3"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamMember4"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">
                          Team Member 4 (Last Name, First Name)
                        </h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="teamMember4"
                          id="teamMember4"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="teamMember5"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mb-6">
                          Team Member 5 (Last Name, First Name)
                        </h2>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="teamMember5"
                          id="teamMember5"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                      <label
                        htmlFor="university"
                        className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <h2 className="mt-8">University</h2>
                        <p className="mb-6">
                          If this is a school project, please provide the full
                          name of your organization. Do not use acronyms.
                          Otherwise, put <strong>NA</strong>
                        </p>

                        <input
                          type="text"
                          onChange={(e) => handleInputChange(e)}
                          name="university"
                          id="university"
                          placeholder="Input here"
                          className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
                        />
                        <br />
                      </label>
                    </div>
                    <hr className="mt-10" />
                    <div className="mt-14 mb-14">
                      <h2 className="font-semibold mb-8">
                        Technology and Commercialization Readiness Level
                      </h2>
                      <p className="text-justify">
                        This form, adopted from NYSERDA, assists emerging and
                        growing companies in determining the technical and
                        commercial maturity of their products or innovations. It
                        utilizes a customized and integrated tool that measures
                        both the Technology Readiness Level (TRL) and Commercial
                        Readiness Level (CRL). This TRL/CRL tool is based on
                        systems developed by NASA, DOE, and ARPA-E. Although it
                        has been specifically designed for ventures in the clean
                        energy industry, it has also been widely used in
                        solutions and ventures across various other industries.
                      </p>
                      <br />
                      <p className="text-justify mb-8">
                        For each category, please select the option that best
                        describes the current status of your product, solution,
                        or innovation.
                      </p>
                      <div className="mt-16 text-justify">
                        <h2 className="mb-6">Technology</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="technology"
                              id="technology"
                              className=" checked:bg-tanglow   border-black radio h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="technology" className="ml-2">
                              Project work is beyond basic research and
                              technology concept has been defined
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="technology"
                              id="technology"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="technology" className="ml-2">
                              Applied research has begun and practical
                              application(s) have been identified
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="technology"
                              id="technology"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="technology" className="ml-2">
                              Preliminary testing of technology components has
                              begun, and technical feasibility has been
                              established in a laboratory environment
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="technology"
                              id="technology"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label htmlFor="technology" className="ml-2">
                              Initial testing of integrated product/system has
                              been completed in a laboratory environment
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="technology"
                              id="technology"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label htmlFor="technology" className="ml-2">
                              Laboratory scale integrated product/system
                              demonstrates performance in the intended
                              application(s)
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 text-justify">
                        <h2 className="mb-6">Product Development</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopment"
                              id="productDevelopment"
                              className="checked:bg-tanglow   radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopment"
                              className="ml-2"
                            >
                              Initial product/market fit has been defined
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopment"
                              id="productDevelopment"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopment"
                              className="ml-2"
                            >
                              Pilot scale product/system has been tested in the
                              intended application(s)
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopment"
                              id="productDevelopment"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopment"
                              className="ml-2"
                            >
                              Demonstration of a full scale product/system
                              prototype has been completed in the intended
                              application(s)
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopment"
                              id="productDevelopment"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopment"
                              className="ml-2"
                            >
                              Actual product/system has been proven to work in
                              its near-final form under a representative set of
                              expected conditions and environments
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopment"
                              id="productDevelopment"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopment"
                              className="ml-2"
                            >
                              Product/system is in final form and has been
                              operated under the full range of operating
                              conditions and environments
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 text-justify">
                        <h2 className="mb-6">Competitive Landscape</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="competitiveLandscape"
                              id="competitiveLandscape"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="competitiveLandscape"
                              className="ml-2"
                            >
                              Secondary market research has been performed and
                              basic knowledge of potential applications and
                              competitive landscape have been identified
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="competitiveLandscape"
                              id="competitiveLandscape"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="competitiveLandscape"
                              className="ml-2"
                            >
                              Primary market research to prove the
                              product/system commercial feasibility has been
                              completed and basic understanding of competitive
                              products/systems has been demonstrated
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="competitiveLandscape"
                              id="competitiveLandscape"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="competitiveLandscape"
                              className="ml-2"
                            >
                              Comprehensive market research to prove the
                              product/system commercial feasibility has been
                              completed and intermediate understanding of
                              competitive products/systems has been demonstrated
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="competitiveLandscape"
                              id="competitiveLandscape"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="competitiveLandscape"
                              className="ml-2"
                            >
                              Competitive analysis to illustrate unique features
                              and advantages of the product/system compared to
                              competitive products/systems has been completed
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="competitiveLandscape"
                              id="competitiveLandscape"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="competitiveLandscape"
                              className="ml-2"
                            >
                              Full and complete understanding of the competitive
                              landscape, target application(s), competitive
                              products/systems, and market has been achieved
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 text-justify">
                        <h2 className="mb-6">Product Development/Design</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopmentDesign"
                              id="productDevelopmentDesign"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopmentDesign"
                              className="ml-2"
                            >
                              One or more initial product hypotheses have been
                              defined
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopmentDesign"
                              id="productDevelopmentDesign"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopmentDesign"
                              className="ml-2"
                            >
                              Mapping product/system attributes against customer
                              needs has highlighted a clear value proposition
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopmentDesign"
                              id="productDevelopmentDesign"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopmentDesign"
                              className="ml-2"
                            >
                              The product/system has been scaled from laboratory
                              to pilot scale and issues that may affect
                              achieving full scale have been identified
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopmentDesign"
                              id="productDevelopmentDesign"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopmentDesign"
                              className="ml-2"
                            >
                              Comprehensive customer value proposition model has
                              been developed, including a detailed understanding
                              of product/system design specifications, required
                              certifications, and trade-offs
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="productDevelopmentDesign"
                              id="productDevelopmentDesign"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="productDevelopmentDesign"
                              className="ml-2"
                            >
                              Product/system final design optimization has been
                              completed, required certifications have been
                              obtained, and product/system has incorporated
                              detailed customer and product requirements
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 text-justify">
                        <h2 className="mb-6">Team</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="team"
                              id="team"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="team" className="ml-2">
                              No team or company in place (single individual, no
                              legal entity)
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="team"
                              id="team"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />

                            <label htmlFor="team" className="ml-2">
                              Solely technical or non-technical founder(s)
                              running the company with no outside assistance
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="team"
                              id="team"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="team" className="ml-2">
                              Solely technical or non-technical founder(s)
                              running the company with assistance from outside
                              advisors/mentors and/or incubator/accelerator
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="team"
                              id="team"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label htmlFor="team" className="ml-2">
                              Balanced team with technical and business
                              development/commercialization experience running
                              the company with assistance from outside
                              advisors/mentors
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="team"
                              id="team"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="team" className="ml-2">
                              Balanced team with all capabilities onboard (e.g.,
                              sales, marketing, customer service, operations,
                              etc.) running the company with assistance from
                              outside advisors/mentors
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-16 text-justify">
                        <h2 className="mb-6">Go-to-Market</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="goToMarket"
                              id="goToMarket"
                              className=" checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="goToMarket" className="ml-2">
                              Initial business model and value proposition have
                              been defined
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="goToMarket"
                              id="goToMarket"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="goToMarket" className="ml-2">
                              Customers/partners have been interviewed to
                              understand their pain points/needs, and business
                              model and value proposition have been refined
                              based on customer/partner feedback
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="goToMarket"
                              id="goToMarket"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="goToMarket" className="ml-2">
                              Market and customer/partner needs and how those
                              translate to product requirements have been
                              defined, and initial relationships have been
                              developed with key stakeholders across the value
                              chain
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="goToMarket"
                              id="goToMarket"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label htmlFor="goToMarket" className="ml-2">
                              Partnerships have been formed with key
                              stakeholders across the value chain (e.g.,
                              suppliers, partners, service providers, and
                              customers)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="goToMarket"
                              id="goToMarket"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label htmlFor="goToMarket" className="ml-2">
                              Supply agreements with suppliers and partners are
                              in place and initial purchase orders from
                              customers have been received
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 text-justify">
                        <h2 className="mb-6">Manufacturing/Supply Chain</h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="manufacturingSupplyChain"
                              id="manufacturingSupplyChain"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="manufacturingSupplyChain"
                              className="ml-2"
                            >
                              Potential suppliers, partners, and customers have
                              been identified and mapped in an initial value
                              chain analysis
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="manufacturingSupplyChain"
                              id="manufacturingSupplyChain"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="manufacturingSupplyChain"
                              className="ml-2"
                            >
                              Relationships have been established with potential
                              suppliers, partners, service providers, and
                              customers and they have provided input on product
                              and manufacturability requirements
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="manufacturingSupplyChain"
                              id="manufacturingSupplyChain"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="manufacturingSupplyChain"
                              className="ml-2"
                            >
                              Manufacturing process qualifications (e.g. QC/QA)
                              have been defined and are in progress
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="manufacturingSupplyChain"
                              id="manufacturingSupplyChain"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="manufacturingSupplyChain"
                              className="ml-2"
                            >
                              Products/systems have been pilot manufactured and
                              sold to initial customerss
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="manufacturingSupplyChain"
                              id="manufacturingSupplyChain"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                            />
                            <label
                              htmlFor="manufacturingSupplyChain"
                              className="ml-2"
                            >
                              Full scale manufacturing and widespread deployment
                              of product/system to customers and/or users has
                              been achieved
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-20 mb-14">
                      <h2 className="font-semibold mb-4">
                        Eligibility and agreement
                      </h2>
                      <p className="mb-8 text-justify">
                        I confirm that I have read, understood, and agree to
                        comply with the eligibility criteria and rules of
                        LaunchLab program.
                      </p>
                      <div className="flex items-center mb-4">
                        <input
                          type="radio"
                          onChange={(e) => handleInputChange(e)}
                          name="eligibilityAgreement"
                          id="eligibilityAgreement"
                          className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                          checked
                        />
                        <label htmlFor="eligibilityAgreement" className="ml-2">
                          I agree
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          type="radio"
                          onChange={(e) => handleInputChange(e)}
                          name="eligibilityAgreement"
                          id="eligibilityAgreement"
                          className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                          checked
                        />
                        <label htmlFor="eligibilityAgreement" className="ml-2">
                          I do not agree
                        </label>
                      </div>
                    </div>
                    <br />
                    <div className="mt-14">
                      <h2 className="font-semibold mb-4">
                        Applicant Commitment Verification Form
                      </h2>
                      <p className="mb-8 text-justify">
                        To ensure your commitment to the LaunchLab Program,
                        please respond to the following questions with a Yes or
                        No.
                      </p>
                      <div className="mb-6">
                        <h2 className="mb-6 mt-16 text-justify">
                          Do you commit to complete and actively cooperate in
                          all scheduled activities, workshops, and mentorship
                          sessions during the 4-month program of the LaunchLab
                          Program?
                        </h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification1"
                              id="applicantCommitmentVerification1"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification1"
                              className="ml-2"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification1"
                              id="applicantCommitmentVerification1"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification1"
                              className="ml-2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-6 text-justify">
                        <h2 className="mb-6 mt-16">
                          Do you commit to diligently working towards executing
                          your startup’s approved growth plan as outlined in the
                          program?
                        </h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification2"
                              id="applicantCommitmentVerification2"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification2"
                              className="ml-2"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification2"
                              id="applicantCommitmentVerification2"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification2"
                              className="ml-2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-6 text-justify">
                        <h2 className="mb-6 mt-16">
                          If the founder is not always available, will you
                          assign at least one dedicated personnel, directly
                          involved in the aspect of the startup being
                          accelerated, to be consistently involved in all
                          program activities and deliverables, understanding
                          that changing personnel frequently can adversely
                          affect the progress of the acceleration?
                        </h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification3"
                              id="applicantCommitmentVerification3"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification3"
                              className="ml-2"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification3"
                              id="applicantCommitmentVerification3"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification3"
                              className="ml-2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-6 text-justify">
                        <h2 className="mb-6 mt-16">
                          Do you understand and agree that your evaluation
                          results and performance reports will be shared with
                          DOST as part of the program’s accomplishment reports?
                        </h2>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification4"
                              id="applicantCommitmentVerification4"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification4"
                              className="ml-2"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-4">
                            <input
                              type="radio"
                              onChange={(e) => handleInputChange(e)}
                              name="applicantCommitmentVerification4"
                              id="applicantCommitmentVerification4"
                              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out"
                              checked
                            />
                            <label
                              htmlFor="applicantCommitmentVerification4"
                              className="ml-2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <div className="font-secondary text-justify text-black ml-6 mr-6">
                  <p className="mb-6">
                    Thank you for taking the time to complete the registration.
                    We understand and respect your concerns.
                  </p>
                  <p>
                    If you have further questions and concerns , you are welcome
                    to contact our project lead, Engr. Jurydel Rama, at
                    <a
                      href="mailto:jurydel.rama@cit.edu"
                      className="font-semibold text-blue-700"
                    >
                      jurydel.rama@cit.edu
                    </a>
                  </p>
                </div>
              </div>
              <div className="relative z-10 justify-end flex mt-16 mb-6 mr-6">
                <button
                  type="submit"
                  className=" bg-tanglow text-black hover:bg-black hover:text-white font-secondary font-medium right-0 rounded btn-neutral border-b-2 border-black border-solid border-opacity-100 w-36 h-12 "
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="flex justify-center mr-96 mt-8">
              <div className="font-secondary text-black bottom-0">
                Already Applied? <span className="mr-2"></span>
                <Link to="/applicant" className="font-semibold">
                  Login
                </Link>
              </div>
            </div>
          </form>
          {formSubmitted && (
            <div
              role="alert"
              className="alert alert-success transition-opacity duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Form submitted successfully!</span>
            </div>
          )}
        </div>
        <div className="bg-transparent text-white py-4 px-8 flex justify-end items-center fixed bottom-0 w-full z-50">
          {isVisible && (
            <button
              onClick={smoothScrollToTop}
              className="bg-tanglow hover:bg-black text-white font-bold w-12 h-12 rounded focus:outline-none focus:shadow-outline flex items-center justify-center border-b-2 border-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
