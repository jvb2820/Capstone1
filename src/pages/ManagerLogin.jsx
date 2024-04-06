import { Link } from "react-router-dom";

function ManagerLogin() {
  return (
    <>
      <div className="self-center z-50 h-560 absolute inset-0 flex content-center items-center justify-center">
        <div className="bg-tanglow rounded-l-lg h-full w-642 ">
          <div className="h-full justify-center flex flex-col items-center">
            <img
              className="min-h-72 h-110"
              src="../public/images/wilBlackBox.png"
            />
          </div>
        </div>
        <div className="bg-white rounded-r-lg h-full w-642 border-t-black">
          <div className="flex flex-col items-center ">
            <h2 className="font-primary text-black text-3xl m-20">
              WELCOME MANAGER!
            </h2>

            <label
              htmlFor="Username"
              className="relative block rounded-md border border-black shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-6"
            >
              <input
                type="text"
                id="Username"
                className="peer border-none rounded-md bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-12 w-80"
                placeholder="Username"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Username
              </span>
            </label>

            <label
              htmlFor="Password"
              className="relative block rounded-md border border-black shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-6"
            >
              <input
                type="text"
                id="Password"
                className="peer border-none rounded-md bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-12 w-80"
                placeholder="Password"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Password
              </span>
            </label>

            <button className="hover:text-white font-secondary text-black bg-transparent h-12 w-60 mt-16 btn btn-neutral">
              <Link
                to="/managerdashboard"
                className="border-2 border-rose-500 items-center w-full p-3"
              >
                {" "}
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative">
        <div className="min-h-screen w-2/4 bg-cover bg-no-repeat bg-[url('../public/images/geometricBg.png')] relative"></div>
        <div className="w-2/4 right-0 top-0 bg-tanglow"></div>
      </div>
    </>
  );
}

export default ManagerLogin;
