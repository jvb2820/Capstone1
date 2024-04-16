export default function AboutProposedAcceleration({
  handleInputChange,
  saveApplicant,
  formSubmitted,
}) {
  return (
    <div className="font-secondary text-black p ml-6 mr-6 mt-16">
      <h2 className="font-semibold mb-6">
        II. About the Proposed Acceleration
      </h2>
      <div className="mb-4">
        <p className="mb-4">A. Objectives</p>
        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            onChange={(e) => handleInputChange(e)}
            name="objectives"
            id="objectives"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="6"
            placeholder="Type something here..."
          ></textarea>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-4">B. Scope of the proposal</p>
        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            onChange={(e) => handleInputChange(e)}
            name="scopeProposal"
            id="scopeProposal"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="6"
            placeholder="Type something here..."
          ></textarea>
        </div>
      </div>
      <div className="">
        <p className="mb-4">C. Methodology and expected outputs</p>
        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            onChange={(e) => handleInputChange(e)}
            name="methodologyExpectedOutputs"
            id="methodologyExpectedOutputs"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="6"
            placeholder="Type something here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
