export default function CapsuleProposal({
  handleInputChange,
  saveApplicant,
  formSubmitted,
}) {
  return (
    <div className="font-secondary text-black ml-6 mr-6 mt-10">
      <h2 className="font-semibold">I. Fill up Launchlab Capsule Proposal</h2>
      <div className="mt-2">
        <p className="mb-4">A. Startup/Project Description</p>
        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
          <textarea
            onChange={(e) => handleInputChange(e)}
            required
            id="startupProjectDescription"
            name="startupProjectDescription"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="6"
            placeholder="Type something here..."
          ></textarea>
        </div>
      </div>

      <div className="mb-8">
        <p>B. Team Composition</p>
        <h2 className="mt-2 mb-8">Name</h2>

        <div className="mb-2">
          <label
            htmlFor="teamCompositionName1"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
          >
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="teamCompositionName1"
              name="teamCompositionName1"
              placeholder="Member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
            />
          </label>
          <label
            htmlFor="teamCompositionRole1"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="teamCompositionRole1"
              name="teamCompositionRole1"
              placeholder="Input role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <div className="mb-2">
          <label
            htmlFor="teamCompositionName2"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
          >
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="teamCompositionName2"
              name="teamCompositionName2"
              placeholder="Member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
            />
          </label>
          <label
            htmlFor="teamCompositionRole2"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="teamCompositionRole2"
              name="teamCompositionRole2"
              placeholder="Input role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <label
          htmlFor="teamCompositionName3"
          className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
        >
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="teamCompositionName3"
            name="teamCompositionName3"
            placeholder="Member name"
            className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
          />
        </label>
        <label
          htmlFor="teamCompositionRole3"
          className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="teamCompositionRole3"
            name="teamCompositionRole3"
            placeholder="Input role"
            className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
      </div>

      <div className="mt-16">
        <p>C. About Product/Solution</p>
        <div>
          <p>1. Problem Statement</p>
          <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
            <textarea
              onChange={(e) => handleInputChange(e)}
              id="problemStatement"
              name="problemStatement"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="6"
              placeholder="Type something here..."
            ></textarea>
          </div>
        </div>
        <div>
          <p>2. Target Market</p>
          <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
            <textarea
              onChange={(e) => handleInputChange(e)}
              id="targetMarket"
              name="targetMarket"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="6"
              placeholder="Type something here..."
            ></textarea>
          </div>
        </div>
        <div>
          <p>3. solution Description</p>
          <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
            <textarea
              onChange={(e) => handleInputChange(e)}
              id="solutionDescription"
              name="solutionDescription"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="6"
              placeholder="Type something here..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-16 overflow-x-auto">
        <p className="mb-4">
          D. Historical Timeline of the Product/Project Development
        </p>
        <div>
          <p className="mt-6 mb-4 text-gray-500">Start from the most recent</p>
          <div className="border-none border-gray-500">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="font-semibold border border-gray-500 px-4 py-2">
                    Month-Year
                  </th>
                  <th className="font-semibold border border-gray-500 px-4 py-2">
                    Key Activities or Milestones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    onChange={(e) => handleInputChange(e)}
                    id="historicalDate1"
                    name="historicalDate1"
                    className="border border-gray-500 px-4 py-2"
                  >
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      onChange={(e) => handleInputChange(e)}
                      name="historicalKeyActivities1"
                      id="historicalKeyActivities1"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td
                    onChange={(e) => handleInputChange(e)}
                    id="historicalDate2"
                    name="historicalDate2"
                    className="border border-gray-500 px-4 py-2"
                  >
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      onChange={(e) => handleInputChange(e)}
                      name="historicalKeyActivities2"
                      id="historicalKeyActivities2"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td
                    onChange={(e) => handleInputChange(e)}
                    id="historicalDate3"
                    name="historicalDate3"
                    className="border border-gray-500 px-4 py-2"
                  >
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      onChange={(e) => handleInputChange(e)}
                      name="historicalKeyActivities3"
                      id="historicalKeyActivities3"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td
                    onChange={(e) => handleInputChange(e)}
                    id="historicalDate4"
                    name="historicalDate4"
                    className="border border-gray-500 px-4 py-2"
                  >
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      onChange={(e) => handleInputChange(e)}
                      name="historicalKeyActivities4"
                      id="historicalKeyActivities4"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td
                    onChange={(e) => handleInputChange(e)}
                    id="historicalDate5"
                    name="historicalDate5"
                    className="border border-gray-500 px-4 py-2"
                  >
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      onChange={(e) => handleInputChange(e)}
                      name="historicalKeyActivities5"
                      id="historicalKeyActivities5"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-16 overflow-x-auto">
        <p className="mb-4">E. Competitive Advantage Analysis</p>
        <div>
          <p className="text-gray-500 mt-6 mb-4">
            Add more applicable competitive factors
          </p>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                  Competitive Factors
                </th>
                <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                  Name of Competition 1/ Alternative 1
                </th>
                <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                  Name of Competition 2/ Alternative 2
                </th>
                <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                  Name of Competition 3/ Alternative 3
                </th>
                <th className="w-1/5 font-semibold border border-gray-500 px-4 py-2">
                  Your startup/ Project Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold border border-gray-500 px-4 py-2">
                  <p>Product or Service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="nameCompetitionAlternative1_1"
                    id="nameCompetitionAlternative1_1"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="nameCompetitionAlternative2_1"
                    id="nameCompetitionAlternative2_1"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="nameCompetitionAlternative3_1"
                    id="nameCompetitionAlternative3_1"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="startupProjectName_1"
                    id="startupProjectName_1"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td className="font-semibold border border-gray-500 px-4 py-2">
                  <p>Pricing strategy</p>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="nameCompetitionAlternative1_2"
                    id="nameCompetitionAlternative1_2"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="nameCompetitionAlternative2_2"
                    id="nameCompetitionAlternative2_2"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="nameCompetitionAlternative3_2"
                    id="nameCompetitionAlternative3_2"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    name="startupProjectName_2"
                    id="startupProjectName_2"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-16">
        <p className="mb-4">F. Intellectual Property Status (if applicable)</p>
        <div>
          <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <textarea
              onChange={(e) => handleInputChange(e)}
              name="intellectualPropertyStatus"
              id="intellectualPropertyStatus"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="6"
              placeholder="Type something here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
