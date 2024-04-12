import { Link } from "react-router-dom";

export default function TbiboardDashboard() {
  return (
    <>
      <div className="pt-32 h-screen bg-white  flex justify-start items-center flex-col justify-items-center text-center">
        <div className="p-5">
          <h1 className="text-xl mb-2 text-center text-black">RECOMMENDED FROM MANAGER</h1>
        </div>
        {/* Apply overflow-x-scroll to the div containing the table */}
        <div className="border-2 border-black bg-white rounded-lg shadow w-9/12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="bg-tanglow  rounded-t-md border-b-2 border-black p-4 text-black  "
                  colSpan={2}
                >
                  asdf
                </th>
              </tr>
            </thead>
            <tbody >
              <tr  className=" bg-white">
                <td className="text-sm whitespace-nowrap p-8 bg-white text-left">asdfasdfsdf</td>
                <td className="w-1/5">
                  <button className="w-10/12  mr-20 text-black hover:bg-gold btn btn-outline hover:text-white">
                    Evaluate
                  </button>
                </td>
              </tr>
              <tr  >
                <td className="text-sm whitespace-nowrap p-8 bg-white rounded-md">asdfasdfsdf</td>
                <td className="w-1/5 bg-white rounded-md">
                  <button className="btn btn-outline w-10/12  mr-20 text-black hover:bg-gold hover:text-white">
                    Evaluate
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-lg absolute font-bold bottom-8 right-12 text-black">
          <Link to="/tbiboard">logout</Link>
        </div>
      </div>
    </>
  );
}
