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
      <div className="bg-gradient-to-r from-formbg-dark to-formbg-light flex md:flex-row-reverse w-full">
        <img
          src="../public/images/honeycomb.png"
          className="mix-blend-overlay absolute top-0 right-0 md:fixed"
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
          className="mix-blend-overlay w-40 h-40 absolute top-14 left-4 md:fixed"
        />
        <img
          src="../public/images/cone.png"
          className="mix-blend-overlay w-40 h-40 absolute top-4 left-1/2 right-0 md:fixed"
        />
        <img
          src="../public/images/cylinder.png"
          className="mix-blend-overlay w-40 h-40 absolute bottom-10 left-16 md:fixed"
        />
        <img
          src="../public/images/curl.png"
          className="mix-blend-overlay w-40 h-40 absolute bottom-0 left-1/2 pt-10 right-0 md:fixed"
        />
        <div className="w-full p-20 mt-14">
          {/* <div className="border-4 border-red-500 bg-rose p-10 sm:p-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full"> */}
          {/* <div className="border-4 border-pink-500 w-full xl:w-9/12 bg-white mr-96"> */}
          <div className="border rounded-lg border-black bg-white md:w-9/12">
            <img
              src="../public/images/wilBlackBox.png"
              className="h-20 ml-auto mr-4 mt-4"
            />
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="../public/images/launchlab.png"
                className="w-64 h-20 align-middles mb-8 -mt-8"
              ></img>
              <h1 className="font-secondary text-black font-semibold text-2xl -mt-8 mb-6 -ml-6">
                Registration Form
              </h1>
            </div>
            <p className="font-secondary text-justify mb-8 ml-6 text-black mr-6">
              Thank you for your interest in participating the LaunchLab Program
              of DASIG. This program is spearheaded by CIT-U Wildcat Innovation
              Labs. Please complete the following form to submit your capsule
              proposal for consideration.
              <hr className="mt-12" />
            </p>
            <div className="ml-6 mt-14">
              <label
                htmlFor="UserEmail"
                className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <h2 className="font-secondary text-black mb-6">Email</h2>

                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Enter your email here"
                  className="font-secondary text-black w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-14"
                />
                <br />
              </label>
              <hr className="mr-6" />
            </div>
            <p className="font-secondary text-black text-justify mt-10 mb-8 ml-6 mr-8">
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
            <p className="font-secondary text-black text-justify mt-8 mb-8 ml-6 mr-8">
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
            <p className="font-secondary text-black text-justify mt-8 mb-8 ml-6 mr-8">
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
            <div className="flex flex-col items-start">
              <label className="mt-8 ml-6 mb-8 flex items-center">
                <input
                  type="radio"
                  name="radio-1"
                  value="I AGREE"
                  className="radio"
                  checked
                />
                <span className="text-black font-secondary ml-4">I AGREE</span>
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
                htmlFor="UserEmail"
                className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <h2 className="font-secondary text-black mt-16 mb-6">
                  Project Title/Startup Name
                </h2>

                <input
                  type="text"
                  id="UserEmail"
                  placeholder="Enter your project title here"
                  className="font-secondary text-black w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-14"
                />
                <br />
              </label>
            </div>
            <div className="">
              <div className="0" id="capsuleProposal">
                <CapsuleProposal />
              </div>
              <br />
              <div className="" id="aboutProposedAcceleration">
                <AboutProposedAcceleration />
              </div>
              <br />
              <div className="" id="cvProjectLeader">
                <CvProjectLeader />
              </div>

              <br />
              <div className="font-secondary text-justify text-black ml-6 mr-6">
                <p className="mb-6">
                  Thank you for taking the time to complete the registration. We
                  understand and respect your concerns.
                </p>
                <p>
                  If you have further questions and concerns , you are welcome
                  to contact our project lead, Engr. Jurydel Rama, at{" "}
                  <a
                    href="mailto:jurydel.rama@cit.edu"
                    className="font-bold text-blue-700"
                  >
                    jurydel.rama@cit.edu
                  </a>
                </p>
              </div>
            </div>
            <div className="justify-end flex mt-16 mb-6 mr-6">
              <button className="bg-tanglow text-black hover:bg-black hover:text-white font-secondary font-medium right-0 rounded btn-neutral border-b-2 border-black border-solid border-opacity-100 w-36 h-12">
                Submit
              </button>
            </div>
          </div>
          <div className="justify-center flex mt-8">
            <div className="font-secondary text-black bottom-0">
              Already Applied? <span className="mr-2"></span>
              <Link to="/applicant" className="font-semibold">
                Login
              </Link>
            </div>
          </div>
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
