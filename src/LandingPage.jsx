import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      {/*
    pending:
    fix image cover size
    add opacity to image
    fix bg 
    */}
      <div className="md:bg-[url('../public/images/test.png')] md:bg-center md:bg-cover md:bg-local absolute md:h-560 md:min-w-full">
        <div className="flex justify-center md:flex md:justify-start">
          <img
            className="cursor-pointer h-20 p-3 md:m-5 md:ml-20"
            src="../public/images/wilYellowLogo.png"
          />
        </div>

        <div className="text-center p-8 md:p-28 font-primary text-5xl">
          <span className="text-white">LOGIN</span>{" "}
          <span className="text-[#FDCC01]">AS</span>
        </div>

        <div className="text-lg relative z-10 justify-center flex flex-wrap flex-row text-center gap-10 font-secondary font-semibold text-50 text-black">
          <Link to="/applicant">
            <div className="card rounded-radius-40 min-h-32 min-w-60 md:h-300 md:w-72  image-full items-center bg-[#EAEAEA]  md:hover:bg-tanglow hover:shadow-xl duration-100 ease-in cursor-pointer border-b-10 border-transparent transform hover:border-black hover:border-b-10">
              <div className="">APPLICANT</div>
            </div>
          </Link>
          <Link to="/officer">
            <div className="card rounded-radius-40 min-h-32 min-w-60 md:h-300 md:w-72  image-full items-center bg-[#EAEAEA]  md:hover:bg-tanglow hover:shadow-xl duration-100 ease-in cursor-pointer border-b-10 border-transparent transform hover:border-black hover:border-b-10">
              <div className="">OFFICER</div>
            </div>
          </Link>
          <Link to="/tbiboard">
            <div className="card rounded-radius-40 min-h-32 min-w-60 md:h-300 md:w-72  image-full items-center bg-[#EAEAEA]  md:hover:bg-tanglow hover:shadow-xl duration-100 ease-in cursor-pointer border-b-10 border-transparent transform hover:border-black hover:border-b-10">
              <div className="">TBI BOARD</div>
            </div>
          </Link>
          <Link to="/manager">
            <div className="card rounded-radius-40 min-h-32 min-w-60 md:h-300 md:w-72  image-full items-center bg-[#EAEAEA]  md:hover:bg-tanglow hover:shadow-xl duration-100 ease-in cursor-pointer border-b-10 border-transparent transform hover:border-black hover:border-b-10">
              <div className="">MANAGER</div>
            </div>
          </Link>
        </div>
      </div>
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E7BA05" />
            <stop offset="100%" stopColor="#A78A14" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          // wave
          d="M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,112C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          // mountain
          // d="M0,192L40,181.3C80,171,160,149,240,133.3C320,117,400,107,480,117.3C560,128,640,160,720,160C800,160,880,128,960,106.7C1040,85,1120,75,1200,85.3C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          // small hill
          // d="M0,192L120,176C240,160,480,128,720,122.7C960,117,1200,139,1320,149.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
