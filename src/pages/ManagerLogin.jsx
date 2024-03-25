function ManagerLogin() {
  return (
    <>
      <div className="self-center z-50 h-560 absolute inset-0 flex content-center items-center justify-center">
        <div className="bg-tanglow h-full w-642 ">
          <div className="flex flex-col items-center ">
            <img
              className=" m-20 h-110"
              src="../public/images/wilBlackBox.png"
            />
          </div>
        </div>
        <div className="bg-white h-full w-642 ">
          <div className="flex flex-col items-center">
            <h2 className="m-20">WELCOME APPLICANT!</h2>
            <input
              type="text"
              placeholder="Username"
              className="mt-4 input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Password"
              className="mt-8 input input-bordered w-full max-w-xs"
            />
            <button className="mt-16 btn btn-neutral">Login</button>
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
