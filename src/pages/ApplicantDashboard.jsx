export default function ApplicantDashboard() {
  return (
    <>
      <div className="h-full bg-white flex-col md:flex-row flex justify-between">
        <div className="order-2 md:order-1">
          <h2>APPLICATION STATUS</h2>
          <p>Failed</p>
          <button className="hover:text-white font-secondary text-black bg-transparent h-12 w-60 mt-16 btn btn-neutral">
            View Feedback
          </button>
        </div>
        <div className="order-last md:order-2">PROGRESS TRACK</div>
        <div className="order-1 md:order-3">
          <h2>WELCOME USER</h2>
          <p>ID:123</p>
        </div>
      </div>
    </>
  );
}
