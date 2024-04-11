import ApplicantCommitmentForm from "./ApplicantCommitmentForm";
import EligibilityAgreement from "./EligibilityAgreement";
import TechnologyCommercialization from "./TechnologyCommercialization";

export default function CvProjectLeader() {
  return (
    <>
      <div className="mt-16 font-secondary text-black p-4 ml-6 mr-6">
        <h2 className="font-semibold mb-8">
          III. Curriculum Vitae of the Project Leader
        </h2>
        <div className="relative my-6 inline-flex sm:w-96 w-full items-center gap-2 rounded border border-slate-200 text-sm text-slate-500">
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="peer order-2 [&::file-selector-button]:hidden"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-black border border-black px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-tanglow hover:border-tanglow hover:text-black focus-visible:outline-none"
          >
            {" "}
            Upload a file{" "}
          </label>
        </div>
        <hr />
        <div className="mt-14 mb-14">
          <h2 className="mb-4">
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
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <br />
          </label>
        </div>
        <div className="">
          <h2 className="font-semibold mt-8 mb-8">Group Info</h2>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-4">Group Name</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">
              Team Leader - Team Member 1 (Last Name, First Name)
            </h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Leaders Mobile Number</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Leaders Email Address</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 2 (Last Name, First Name)</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 3 (Last Name, First Name)</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 4 (Last Name, First Name)</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 5 (Last Name, First Name)</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mt-8">University</h2>
            <p className="mb-6">
              If this is a school project, please provide the full name of your
              organization. Do not use acronyms. Otherwise, put{" "}
              <strong>NA</strong>
            </p>

            <input
              type="email"
              id="UserEmail"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
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
