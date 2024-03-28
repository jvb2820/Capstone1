import { useState, useEffect } from "react";
import "../index.css";
import CapsuleProposal from "./CapsuleProposal";
import AboutProposedAcceleration from "./AboutProposedAcceleration";
import CvProjectLeader from "./CvProjectLeader";

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
      <div className="bg-rose border-2 border-rose-500">
        <div className="p-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
          <div className=" border-2 border-green-500 lg:fixed hidden lg:block text-black lg:right-40 lg:pr-20">
            Registration Form
            <ul>
              <li>
                <a>I. text1</a>
              </li>
              <li>
                <a>II. text2</a>
              </li>
              <li>
                <a>III. text3</a>
              </li>
            </ul>
          </div>
          <div className="b-20 w-9/12 bg-white">
            <img
              src="../public/images/wilBlackBox.png"
              className="h-20 ml-auto"
            />
            <h1>Launchlab Registration Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quos voluptatem perspiciatis fugit accusantium aut nostrum minima
              libero quisquam facilis.
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
              quo eum laudantium, ratione praesentium expedita accusamus
              deleniti repudiandae voluptatem pariatur quidem inventore,
              incidunt libero officia voluptatibus nemo odit impedit quae dolor
              nihil? Eaque?
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
              <CapsuleProposal />
              <br />
              <AboutProposedAcceleration />
              <br />
              <CvProjectLeader />
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
          <div className="flex justify-center border-2 border-red-500">
            Already Applied? Login
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
