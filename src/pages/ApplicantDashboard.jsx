import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ApplicantDashboard() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleConfirm = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Rest of the dashboard */}
      <div className="h-screen bg-white flex-col md:flex-row flex justify-between relative">
        {/* New modal */}
        {showModal && (
          <div
            id="crud-modal"
            className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-white bg-opacity-50 backdrop-blur-md"
          >
            {/* Modal content */}
            <div className="bg-tanglow p-4 md:p-5 w-11/12 max-w-5xl rounded-lg h-3/5">
              <img
                src="../public/images/plane.png"
                className="mix-blend-overlay absolute top-[280px] right-[240px] md:fixed pointer-events-none z-0 h-[340px] w-[383px] -rotate-10"
              />
              {/* Modal header */}
              <div className="flex items-center justify-center pb-4 md:pb-5">
                <h3 className="font-primary font-bold text-black text-[30px]">
                  CHANGE PASSWORD
                </h3>
              </div>
              {/* Modal body */}
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2 ">
                  <div className="col-span-2">
                    <input
                      type="password"
                      name="currentPassword"
                      id="currentPassword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[450px] p-2.5 mx-auto mb-8"
                      placeholder="Current Password"
                      required
                    />
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[450px] p-2.5 mx-auto mb-8"
                      placeholder="New Password"
                      required
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[450px] p-2.5 mx-auto mb-8"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-black hover:bg-white hover:text-black focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center w-40 justify-center"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="ml-7 mt-6 text-black font-bold">
          <h2>Application Status:</h2>
          <p>Failed</p>
          <button
            className="hover:text-white font-secondary text-black bg-transparent h-12 w-60 mt-16 btn btn-neutral"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            View Feedback
          </button>
        </div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="order-last md:order-2 mt-16 text-black font-bold mr-16">
          PROGRESS TRACK
        </div>
        <div className="order-1 md:order-3 mt-6 mr-7 text-black font-bold">
          <h2>WELCOME USER</h2>
          <div className=" ml-16 font-medium">
            <p>ID:123</p>
          </div>
        </div>
        <div className="absolute bottom-8 right-24 font-bold text-black text-lg">
          <Link to="/applicant">Logout</Link>
        </div>
      </div>
    </div>
  );
}
