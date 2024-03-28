import { useState, useEffect } from "react";
import ApplicantCommitmentForm from "./ApplicantCommitmentForm";
import TechnologyCommercialization from "./TechnologyCommercialization";
import "../index.css";

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

  return (
    <>
      <div className="p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
        sadf
        <div className="b-20 w-9/12 bg-white">
          <img
            src="../public/images/wilBlackBox.png"
            className="h-20 ml-auto"
          />
          <h1>Launchlab Registration Form</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos
            voluptatem perspiciatis fugit accusantium aut nostrum minima libero
            quisquam facilis.
          </p>
          <hr />
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2>Email</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Enter your email here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <br />
          </label>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            temporibus officiis sint unde autem ipsum voluptatibus laudantium
            laborum vel, perspiciatis tempora facere! Maxime et, fugit tempore
            quo eum laudantium, ratione praesentium expedita accusamus deleniti
            repudiandae voluptatem pariatur quidem inventore, incidunt libero
            officia voluptatibus nemo odit impedit quae dolor nihil? Eaque?
          </p>
          <input type="radio" name="radio-1" className="radio" checked />
          <input type="radio" name="radio-1" className="radio" />
          <hr />{" "}
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2>Project Title</h2>

            <input
              type="text"
              id="UserEmail"
              placeholder="Enter your project title here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <br />
          </label>
          <div>
            <h2>I. Fill up Launchlab Capsule Proposal</h2>
            <div className="border-2 border-rose-500">
              <p>A. Startup/Project Description</p>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <textarea
                  id="OrderNotes"
                  className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                  rows="4"
                  placeholder="type something here..."
                ></textarea>
              </div>
            </div>

            <div className="border-2 border-emerald-500">
              <p>B. Team Composition</p>
              <h2>Name</h2>

              <div className="border-2 border-red-500">
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserName"
                    placeholder="Enter member name"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </label>
                <label
                  htmlFor="UserRole"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserRole"
                    placeholder="Enter member role"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </label>
              </div>
              <div className="border-2 border-red-500">
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserName"
                    placeholder="Enter member name"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </label>
                <label
                  htmlFor="UserRole"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserRole"
                    placeholder="Enter member role"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </label>
              </div>
              <div className="border-2 border-red-500">
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserName"
                    placeholder="Enter member name"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </label>
                <label
                  htmlFor="UserRole"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserRole"
                    placeholder="Enter member role"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </label>
              </div>
            </div>

            <div className="border-2 border-rose-500">
              <p>C. About Product/Solution</p>
              <div>
                <p>1. Problem Statement</p>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
              <div>
                <p>2. Target Market</p>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
              <div>
                <p>3. solution Description</p>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="border-2 border-green-500 p-4">
              <p className="mb-4">
                D. Historical Timeline of the Product/Project Development
              </p>
              <div>
                <p className="mb-2">Start from the most recent</p>
                <div className="border-none border-gray-500">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="border border-gray-500 px-4 py-2">
                          Month-Year
                        </th>
                        <th className="border border-gray-500 px-4 py-2">
                          Key Activities or Milestones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-500 px-4 py-2">
                          <p>month</p>
                          <p>year</p>
                        </td>
                        <td className="border border-gray-500 px-4 py-2">
                          <textarea
                            name="activities"
                            id="activities"
                            placeholder="Enter key activities or milestones here"
                            className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-500 px-4 py-2">
                          <p>month</p>
                          <p>year</p>
                        </td>
                        <td className="border border-gray-500 px-4 py-2">
                          <textarea
                            name="activities"
                            id="activities"
                            placeholder="Enter key activities or milestones here"
                            className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-500 px-4 py-2">
                          <p>month</p>
                          <p>year</p>
                        </td>
                        <td className="border border-gray-500 px-4 py-2">
                          <textarea
                            name="activities"
                            id="activities"
                            placeholder="Enter key activities or milestones here"
                            className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-500 px-4 py-2">
                          <p>month</p>
                          <p>year</p>
                        </td>
                        <td className="border border-gray-500 px-4 py-2">
                          <textarea
                            name="activities"
                            id="activities"
                            placeholder="Enter key activities or milestones here"
                            className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-500 px-4 py-2">
                          <p>month</p>
                          <p>year</p>
                        </td>
                        <td className="border border-gray-500 px-4 py-2">
                          <textarea
                            name="activities"
                            id="activities"
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
            <div className="border-2 border-green-500 p-4">
              <p className="mb-4">E. Competitive Advantage Analysis</p>
              <div>
                <p>Add more applicable competitive factors</p>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-500 px-4 py-2">
                        Competitive Factors
                      </th>
                      <th className="border border-gray-500 px-4 py-2">
                        Name of Competition 1/ Alternative 1
                      </th>
                      <th className="border border-gray-500 px-4 py-2">
                        Name of Competition 2/ Alternative 2
                      </th>
                      <th className="border border-gray-500 px-4 py-2">
                        Name of Competition 3/ Alternative 3
                      </th>
                      <th className="border border-gray-500 px-4 py-2">
                        Your startup/ Project Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-500 px-4 py-2">
                        <p>product or service offering</p>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 px-4 py-2">
                        <p>pricing strategy</p>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <textarea
                          name="activities"
                          id="activities"
                          placeholder="Enter key activities or milestones here"
                          className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                        ></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-2 border-rose-500 p-4">
              <p>F. Intellectual Property Status (if applicable)</p>
              <div>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <br />
            <div className="border-2 border-gray-500 p-4">
              <h2>II. About the Proposed Acceleration</h2>
              <div className="border-2 border-rose-500">
                <p>A. Objectives</p>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
              <div className="border-2 border-rose-500">
                <p>B. Scope of the proposal</p>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
              <div className="border-2 border-rose-500">
                <p>C. Methodology and expected outputs</p>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <textarea
                    id="OrderNotes"
                    className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="4"
                    placeholder="type something here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <br />
            <div className="border-2 border-red-500 p-4">
              <h2>III. Curriculum Vitae of the Project Leader</h2>
              <div className="border-2 border-gray-500">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    {/* <span className="label-text">Pick a file</span>
                    <span className="label-text-alt">Alt asd</span> */}
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                  <div className="label">
                    <span className="label-text-alt">Alt label</span>
                    <span className="label-text-alt">Alt label</span>
                  </div>
                </label>
              </div>
              <hr />
              <div className="border-2 border-red-500">
                <h2>
                  Links to any supporting materials (e.g., website, explainer
                  video, presentation)
                </h2>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="UserEmail"
                    placeholder="Enter your project title here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
              </div>
              <div className="border-2 border-red-500">
                <h2>Group Info</h2>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Group Name</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Leader - Team Member 1 (Last Name, First Name)</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Leaders Mobile Number</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Leaders Email Address</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Member 2 (Last Name, First Name)</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Member 3 (Last Name, First Name)</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Member 4 (Last Name, First Name)</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>Team Member 5 (Last Name, First Name)</h2>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <h2>University</h2>
                  <p>
                    If this is a school project, please provide the full name of
                    your organization. Do not use acronyms. Otherwise, put{" "}
                    <strong>NA</strong>
                  </p>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email here"
                    className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <br />
                </label>
              </div>
              <hr />
              <TechnologyCommercialization />
              <hr />
              <div className="border-2 border-red-500">
                <h2>Eligibility and agreement</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum sit saepe perspiciatis optio. Excepturi, ullam!
                </p>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="agree"
                    name="answer"
                    className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
                  />
                  <label htmlFor="agree" className="ml-2">
                    I agree
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="notagree"
                    name="answer"
                    className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
                  />
                  <label htmlFor="notagree" className="ml-2">
                    I do not agree
                  </label>
                </div>
              </div>
              <br />
              <ApplicantCommitmentForm />
            </div>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, ut!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quasi unde perspiciatis magni veritatis pariatur accusamus ipsam
              mollitia dolore dolorem.
            </p>
          </div>
          <div className="border-2 border-red-500 justify-end flex">
            <button className="right-0 btn btn-neutral">Neutral</button>
          </div>
        </div>
        <div className="flex justify-center border-2 border-red-500">
          Already Applied? Login
        </div>
      </div>
      <footer className="bg-transparent text-white py-4 px-8 flex justify-end items-center fixed bottom-0 w-full z-50">
        {isVisible && (
          <button
            onClick={smoothScrollToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mr-1"
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
      </footer>
    </>
  );
}
