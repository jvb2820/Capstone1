import { Link } from "react-router-dom";

export default function OfficerDashboard() {
  return (
    <>
      {/* <div className="border-2 border-rose-500 h-screen bg-white flex justify-start items-center flex-col justify-items-center text-center w-screen"> */}
      {/* <div> */}
      <div className="pt-32 h-screen bg-white  flex justify-start items-center flex-col justify-items-center text-center">
        <div className="border-2 border-green-500 p-5">
          <h1 className="text-xl mb-2 text-center">
            review applicant documents
          </h1>
        </div>

        {/* Apply overflow-x-scroll to the div containing the table */}
        {/* <div className="border-2 border-green-500 overflow-x-scroll w-9/12"> */}
        <div className="border-4 border-red-500 bg-rose-100 overflow-x-auto rounded-lg shadow w-9/12">
          {/* <table className="w-full border-collapse"> */}
          <table className="w-full ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  Email
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  project title/startup name
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  startup description
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team composition
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  about the product/solution
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  historical timeline of the product/project development
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  competitive advantage analysis
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  intellectual property status
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  objectives
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  scope of the proposal
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  methodology and expected outputs
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  curriculum vitae
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  links to any supporting materials
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  group name
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team leader - team member 1
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team leader - mobile number
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team leader email address
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team member 2
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team member 3
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team member 4
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team member 5
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team member 6
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  university
                </th>

                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  technology
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  product development
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  competitive landscape
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  product development/design
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  team
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  go-to-market
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  go-to-market
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  eligibility and agreement
                </th>
                <th className="border border-gray-500 px-4 py-2 text-left text-sm">
                  applicant commitment verification form
                </th>
                <th
                  className="border border-gray-500 text-left text-sm"
                  colSpan={2}
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>email@gmail.com</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <p>product or service offering</p>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <button
                    className="btn btn-neutral"
                    onClick={() =>
                      document.getElementById("acceptOfficer").showModal()
                    }
                  >
                    accept
                  </button>
                  <dialog id="acceptOfficer" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg">acceptOfficer!</h3>
                      <p className="py-4">Click the button below to close</p>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
                <td className="border border-gray-500 px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                  <button
                    className="btn btn-neutral"
                    onClick={() =>
                      document.getElementById("declineOfficer").showModal()
                    }
                  >
                    decline
                  </button>
                  <dialog id="declineOfficer" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg">declineOfficer!</h3>
                      <p className="py-4">Click the button below to close</p>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">send</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-2 border-rose-500 absolute bottom-0 right-0">
          <Link to="/officer">logout</Link>
        </div>
      </div>
    </>
  );
}
