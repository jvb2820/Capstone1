export default function CapsuleProposal() {
  return (
    <div className="border-2 border-blue-500">
      <h2>I. Fill up Launchlab Capsule Proposal</h2>
      <div className="border-2 border-rose-500">
        <p>A. Startup/Project Description</p>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            id="OrderNotes"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="4"
            placeholder="type something here..."
          ></textarea>
        </div>
      </div>

      <div className="border-2 border-emerald-500">
        <p>B. Team Composition</p>
        <h2>Name</h2>

        <div className="border-2 border-red-500">
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserName"
              placeholder="Enter member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
          <label
            htmlFor="UserRole"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserRole"
              placeholder="Enter member role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <div className="border-2 border-red-500">
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserName"
              placeholder="Enter member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
          <label
            htmlFor="UserRole"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserRole"
              placeholder="Enter member role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <div className="border-2 border-red-500">
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserName"
              placeholder="Enter member name"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
          <label
            htmlFor="UserRole"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserRole"
              placeholder="Enter member role"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
      </div>

      <div className="border-2 border-rose-500">
        <p>C. About Product/Solution</p>
        <div>
          <p>1. Problem Statement</p>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <textarea
              id="OrderNotes"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="4"
              placeholder="type something here..."
            ></textarea>
          </div>
        </div>
        <div>
          <p>2. Target Market</p>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <textarea
              id="OrderNotes"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="4"
              placeholder="type something here..."
            ></textarea>
          </div>
        </div>
        <div>
          <p>3. solution Description</p>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <textarea
              id="OrderNotes"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="4"
              placeholder="type something here..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="border-2 border-green-500 p-4">
        <p className="mb-4">
          D. Historical Timeline of the Product/Project Development
        </p>
        <div>
          <p className="mb-2">Start from the most recent</p>
          <div className="border-none border-gray-500">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border border-gray-500 px-4 py-2">
                    Month-Year
                  </th>
                  <th className="border border-gray-500 px-4 py-2">
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
      <div className="border-2 border-green-500 p-4">
        <p className="mb-4">E. Competitive Advantage Analysis</p>
        <div>
          <p>Add more applicable competitive factors</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2">
                  Competitive Factors
                </th>
                <th className="border border-gray-500 px-4 py-2">
                  Name of Competition 1/ Alternative 1
                </th>
                <th className="border border-gray-500 px-4 py-2">
                  Name of Competition 2/ Alternative 2
                </th>
                <th className="border border-gray-500 px-4 py-2">
                  Name of Competition 3/ Alternative 3
                </th>
                <th className="border border-gray-500 px-4 py-2">
                  Your startup/ Project Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-4 py-2">
                  <p>product or service offering</p>
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
                <td className="border border-gray-500 px-4 py-2">
                  <p>pricing strategy</p>
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
      <div className="border-2 border-rose-500 p-4">
        <p>F. Intellectual Property Status (if applicable)</p>
        <div>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <textarea
              id="OrderNotes"
              className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
              rows="4"
              placeholder="type something here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
