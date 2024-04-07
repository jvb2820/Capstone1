import { useState, useEffect } from "react";
import "../index.css";
import CapsuleProposal from "./CapsuleProposal";
import AboutProposedAcceleration from "./AboutProposedAcceleration";
import CvProjectLeader from "./CvProjectLeader";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="bg-slate-300  border-2 border-rose-500 flex md:flex-row-reverse w-full">
        {/* <div className="z-50 border-2 border-green-500 xl:fixed xl:block text-black right-0 hidden w-96 pt-20"> */}
        <div className="font-secondary font-normal border-2  border-green-500 text-black pt-20 md:w-3/12 md:fixed md:block hidden">
          Registration Form
          <ul>
            <li>
              <a
                onClick={() => smoothScrollToSection("capsuleProposal")}
                className="cursor-pointer"
              >
                I. Launchlab Capsule Proposal
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  smoothScrollToSection("aboutProposedAcceleration")
                }
                className="cursor-pointer"
              >
                II. About the Proposed Acceleration
              </a>
            </li>
            <li>
              <a
                onClick={() => smoothScrollToSection("cvProjectLeader")}
                className="cursor-pointer"
              >
                III. Curriculum Vitae
              </a>
            </li>
          </ul>
        </div>

        <div className="border-2  border-red-500 w-full p-20">
          {/* <div className="border-4 border-red-500 bg-rose p-10 sm:p-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full"> */}
          {/* <div className="border-4 border-pink-500 w-full xl:w-9/12 bg-white mr-96"> */}
          <div className="border-2 rounded-lg border-black bg-white md:w-9/12">
            <img
              src="../public/images/wilBlackBox.png"
              className="h-20 ml-auto mr-4 mt-4"
            />
            <div className="flex items-center">
              <img
                src="../public/images/launchlab.png"
                className="w-64 h-20 align-middles mb-8 -mt-8"
              ></img>
              <h1 className="font-secondary text-black font-semibold text-2xl -mt-8 mb-6 -ml-6">
                Registration Form
              </h1>
            </div>
            <p className="font-secondary mb-8 ml-6 text-black mr-8">
              Thank you for your interest in participating the LaunchLab Program
              of DASIG. This program is spearheaded by CIT-U Wildcat Innovation
              Labs. Please complete the following form to submit your capsule
              proposal for consideration.
            </p>
            <hr />
            <label
              htmlFor="UserEmail"
              className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <h2 className="font-secondary text-black mt-8 mb-6 ml-6">
                Email
              </h2>

              <input
                type="email"
                id="UserEmail"
                placeholder="Enter your email here"
                className="font-secondary w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8 ml-6"
              />
              <br />
            </label>
            <hr />
            <p className="font-secondary text-black mt-8 mb-8 ml-6 mr-8">
              By accomplishing this form, the following personal information
              will be collected including, startup team members names, personal
              email address, mobile phone number and other relevant information.
              The personal information you will provide in this form will be
              used within LaunchLab Program, DASIG consortium committee and will
              not be shared with any outside parties unless you have prior
              written consent. Development and Acceleration Support for
              Innovation Growth (DASIG) respects your rights as a data subject
              under the Data Privacy Act.
            </p>
            <p className="font-secondary text-black mt-8 mb-8 ml-6 mr-8">
              If you have further questions and concerns regarding the
              processing of your personal information, you are welcome to
              contact our team, Engr. Ralph Laviste at{" "}
              <a
                href="mailto:ralph.laviste@cit.edu"
                className="font-bold text-blue-700"
              >
                ralph.laviste@cit.edu
              </a>{" "}
              and{" "}
              <a
                href="mailto:rlaviste@gmail.com"
                className="font-bold text-blue-700"
              >
                rlaviste@gmail.com
              </a>
              , and Engr. Jurydel Rama at{" "}
              <a
                href="mailto:jurydel.rama@cit.edu"
                className="font-bold text-blue-700"
              >
                jurydel.rama@cit.edu
              </a>{" "}
              and{" "}
              <a
                href="mailto:jurydelrama@gmail.com"
                className="font-bold text-blue-700"
              >
                jurydelrama@gmail.com
              </a>
              .
            </p>
            <p className="font-secondary text-black mt-8 mb-8 ml-6 mr-8">
              In compliance with the Data Privacy Act (DPA) of 2012, also known
              as the Republic Act of 10173 (RA 10173), I agree and authorize the
              Development and Acceleration Support for Innovation Growth (DASIG)
              consortium members to use the personal information for the purpose
              of LaunchLab programs and initiatives. I also acknowledge and
              warrant that I have acquired the consent from all parties relevant
              to this consent and hold free and harmless and indemnify
              Development and Acceleration Support for Innovation Growth (DASIG)
              from any complaint, suit, or damages which any party may file or
              claim in relation to my consent.
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
            <div className="border-4 border-green-500">
              <div className="border-4 border-green-500" id="capsuleProposal">
                <CapsuleProposal />
              </div>
              <br />
              <div
                className="border-4 border-green-500"
                id="aboutProposedAcceleration"
              >
                <AboutProposedAcceleration />
              </div>
              <br />
              <div className="border-4 border-green-500" id="cvProjectLeader">
                <CvProjectLeader />
              </div>

              <br />
              <div className="border-2 border-red-500">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, ut!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quasi unde perspiciatis magni veritatis pariatur
                  accusamus ipsam mollitia dolore dolorem.
                </p>
              </div>
            </div>
            <div className="border-2 border-red-500 justify-end flex">
              <button className="right-0 btn btn-neutral">Neutral</button>
            </div>
          </div>
          <div className="bottom-0 border-2 border-red-500 flex justify-center">
            Already Applied?
            <Link to="/applicant">Login</Link>
          </div>
        </div>
        <div className="bg-transparent text-white py-4 px-8 flex justify-end items-center fixed bottom-0 w-full z-50">
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
        </div>
      </div>
    </>
  );
}
