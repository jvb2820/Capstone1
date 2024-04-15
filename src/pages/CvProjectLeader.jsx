import ApplicantCommitmentForm from "./ApplicantCommitmentForm";
import EligibilityAgreement from "./EligibilityAgreement";
import TechnologyCommercialization from "./TechnologyCommercialization";

export default function CvProjectLeader({
  handleInputChange,
  saveApplicant,
  formSubmitted,
}) {
  return (
    <>
      <div className="mt-16 font-secondary text-black p ml-6 mr-6">
        <h2 className="font-semibold mb-8">
          III. Curriculum Vitae of the Project Leader
        </h2>
        <div className="relative my-6 inline-flex sm:w-96 w-full items-center gap-2 rounded border border-slate-200 text-sm text-slate-500">
          <input
            onChange={(e) => handleInputChange(e)}
            name="curriculumVitaeProjectLeader"
            id="curriculumVitaeProjectLeader"
            type="file"
            className="peer order-2 [&::file-selector-button]:hidden"
          />
          <label
            htmlFor="curriculumVitaeProjectLeader"
            className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-black border border-black px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-tanglow hover:border-tanglow hover:text-black focus-visible:outline-none"
          >
            Upload a file
          </label>
        </div>
        <hr className="mt-10" />
        <div className="mt-14 mb-14">
          <h2 className="mb-4">
            Links to any supporting materials (e.g., website, explainer video,
            presentation)
          </h2>
          <label
            htmlFor="linksToAnySupportingMaterials"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="linksToAnySupportingMaterials"
              id="linksToAnySupportingMaterials"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <br />
          </label>
        </div>
        <div className="">
          <h2 className="font-semibold mt-8 mb-8">Group Info</h2>
          <label
            htmlFor="groupName"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-4">Group Name</h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="groupName"
              id="groupName"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamLeader"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">
              Team Leader - Team Member 1 (Last Name, First Name)
            </h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="teamLeader"
              id="teamLeader"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamsLeaderMobileNumber"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Leaders Mobile Number</h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="teamsLeaderMobileNumber"
              id="teamsLeaderMobileNumber"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamLeaderEmailAddress"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Leaders Email Address</h2>

            <input
              type="email"
              onChange={(e) => handleInputChange(e)}
              name="teamLeaderEmailAddress"
              id="teamLeaderEmailAddress"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamMember2"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 2 (Last Name, First Name)</h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="teamMember2"
              id="teamMember2"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamMember3"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 3 (Last Name, First Name)</h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="teamMember3"
              id="teamMember3"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamMember4"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 4 (Last Name, First Name)</h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="teamMember4"
              id="teamMember4"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="teamMember5"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mb-6">Team Member 5 (Last Name, First Name)</h2>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="teamMember5"
              id="teamMember5"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
          <label
            htmlFor="university"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2 className="mt-8">University</h2>
            <p className="mb-6">
              If this is a school project, please provide the full name of your
              organization. Do not use acronyms. Otherwise, put{" "}
              <strong>NA</strong>
            </p>

            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              name="university"
              id="university"
              placeholder="Input here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mb-8"
            />
            <br />
          </label>
        </div>
        <hr className="mt-10" />
        <TechnologyCommercialization />
        <hr />
        <EligibilityAgreement />
        <br />
        <ApplicantCommitmentForm />
      </div>
    </>
  );
}
