export default function CapsuleProposal() {
  return (
    <div className="font-secondary text-black ml-6 mr-6 mt-10">
      <h2 className="font-semibold">I. Fill up Launchlab Capsule Proposal</h2>
      <div className="mt-2">
        <p className="mb-4">A. Startup/Project Description</p>
        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
          <textarea
            id="OrderNotes"
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
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
          >
            <input
              type="text"
              id="UserName"
              placeholder="Member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
            />
          </label>
          <label
            htmlFor="UserRole"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserRole"
              placeholder="Input role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <div className="mb-2">
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
          >
            <input
              type="text"
              id="UserName"
              placeholder="Member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
            />
          </label>
          <label
            htmlFor="UserRole"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserRole"
              placeholder="Input role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 mr-6"
          >
            <input
              type="text"
              id="UserName"
              placeholder="Member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm mr-8"
            />
          </label>
          <label
            htmlFor="UserRole"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserRole"
              placeholder="Input role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
      </div>

      <div className="mt-16">
        <p>C. About Product/Solution</p>
        <div>
          <p>1. Problem Statement</p>
          <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-8">
            <textarea
              id="OrderNotes"
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
              id="OrderNotes"
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
              id="OrderNotes"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="6"
              placeholder="Type something here..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-16">
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
                  <td className="border border-gray-500 px-4 py-2">
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      name="activities"
                      id="activities"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      name="activities"
                      id="activities"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      name="activities"
                      id="activities"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      name="activities"
                      id="activities"
                      placeholder="Enter key activities or milestones here"
                      className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    <p>month</p>
                    <p>year</p>
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    <textarea
                      name="activities"
                      id="activities"
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
                    name="activities"
                    id="activities"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    name="activities"
                    id="activities"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    name="activities"
                    id="activities"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    name="activities"
                    id="activities"
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
                    name="activities"
                    id="activities"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    name="activities"
                    id="activities"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    name="activities"
                    id="activities"
                    placeholder="Enter key activities or milestones here"
                    className="applicant-form-textarea w-full h-20 border-none bg-transparent p-0 focus:outline-none focus:ring-0 resize-none"
                  ></textarea>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <textarea
                    name="activities"
                    id="activities"
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
              id="OrderNotes"
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
