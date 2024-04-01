import ApplicantCommitmentForm from "./ApplicantCommitmentForm";
import EligibilityAgreement from "./EligibilityAgreement";
import TechnologyCommercialization from "./TechnologyCommercialization";

export default function CvProjectLeader() {
  return (
    <>
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
            Links to any supporting materials (e.g., website, explainer video,
            presentation)
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
              If this is a school project, please provide the full name of your
              organization. Do not use acronyms. Otherwise, put{" "}
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
        <EligibilityAgreement />
        <br />
        <ApplicantCommitmentForm />
      </div>
    </>
  );
}
