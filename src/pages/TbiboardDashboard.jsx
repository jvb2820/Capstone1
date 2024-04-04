import { Link } from "react-router-dom";

export default function TbiboardDashboard() {
  return (
    <>
      <div className="h-screen bg-white  flex justify-start items-center flex-col justify-items-center text-center">
        <div>
          <h1 className="border-2 border-green-500">
            RECOMMENDED FROM MANAGER
          </h1>
        </div>
        {/* Apply overflow-x-scroll to the div containing the table */}
        <div className="border-2 border-rose-500 overflow-x-scroll w-9/12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2" colSpan={2}>
                  asdf
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-4 py-2">
                  ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <button className="btn btn-neutral">Evaluate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-2 border-rose-500 absolute bottom-0 right-0">
          <Link to="/tbiboard">logout</Link>
        </div>
      </div>
    </>
  );
}
