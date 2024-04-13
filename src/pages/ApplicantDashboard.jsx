import { Link } from "react-router-dom";

export default function ApplicantDashboard() {
  return (
    <>
      <div className="h-screen bg-white flex-col md:flex-row flex justify-between relative">
        <div className=" ml-7 mt-6 order-2 md:order-1 text-black font-bold">
          <h2>APPLICATION STATUS:</h2>
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
        <div className="order-last md:order-2 mt-16 text-black font-bold mr-16">PROGRESS TRACK</div>
        <div className="order-1 md:order-3 mt-6 mr-7 text-black font-bold">
          <h2>WELCOME USER</h2>
          <div className=" ml-16 font-medium">
          <p>ID:123</p>
          </div>
          
        </div>
        <div className=" absolute bottom-8 right-24 font-bold text-black text-lg">
          <Link to="/applicant">logout</Link>
        </div>
      </div>
    </>
  );
}
