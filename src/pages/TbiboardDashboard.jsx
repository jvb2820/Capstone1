import { Link } from "react-router-dom";

export default function TbiboardDashboard() {
  return (
    <>
      <div className="pt-32 h-screen bg-white  flex justify-start items-center flex-col justify-items-center text-center">
        <div className="border-2 border-green-500 p-5">
          <h1 className="text-xl mb-2 text-center">RECOMMENDED FROM MANAGER</h1>
        </div>
        {/* Apply overflow-x-scroll to the div containing the table */}
        <div className="border-4 border-red-500 bg-rose-100 rounded-lg shadow w-9/12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="bg-gray-50 border-b-2 border-gray-200 p-4  "
                  colSpan={2}
                >
                  asdf
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm whitespace-nowrap p-8 ">asdfasdfsdf</td>
                <td className="w-1/5">
                  <button className="btn btn-neutral w-10/12  mr-20">
                    Evaluate
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-sm whitespace-nowrap p-8 ">asdfasdfsdf</td>
                <td className="w-1/5">
                  <button className="btn btn-neutral w-10/12  mr-20">
                    Evaluate
                  </button>
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
