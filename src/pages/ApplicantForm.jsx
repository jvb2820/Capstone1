export default function ApplicantForm() {
  return (
    <>
      <div className="p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
        sadf
        <div className="b-20 w-9/12 bg-white">
          <img
            src="../public/images/wilBlackBox.png"
            className="h-20 ml-auto"
          />
          <h1>Launchlab Registration Form</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos
            voluptatem perspiciatis fugit accusantium aut nostrum minima libero
            quisquam facilis.
          </p>
          <hr />
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2>Email</h2>

            <input
              type="email"
              id="UserEmail"
              placeholder="Enter your email here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <br />
          </label>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            temporibus officiis sint unde autem ipsum voluptatibus laudantium
            laborum vel, perspiciatis tempora facere! Maxime et, fugit tempore
            quo eum laudantium, ratione praesentium expedita accusamus deleniti
            repudiandae voluptatem pariatur quidem inventore, incidunt libero
            officia voluptatibus nemo odit impedit quae dolor nihil? Eaque?
          </p>
          <input type="radio" name="radio-1" className="radio" checked />
          <input type="radio" name="radio-1" className="radio" />
          <hr />{" "}
          <label
            htmlFor="UserEmail"
            className="relative overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <h2>Project Title</h2>

            <input
              type="text"
              id="UserEmail"
              placeholder="Enter your project title here"
              className="w-1/4 h-8 border-none bg-transparent p-0 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <br />
          </label>
          <div>
            <h2>Fill up Launchlab Capsule Proposal</h2>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
