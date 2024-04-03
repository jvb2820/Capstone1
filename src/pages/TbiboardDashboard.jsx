export default function TbiboardDashboard() {
  return (
    <>
      <div className="border-2 border-rose-500">
        <h1>RECOMMENDED FROM MANAGER</h1>
        {/* Apply overflow-x-scroll to the div containing the table */}
        <div className="border-2 border-green-500 overflow-x-scroll table-fixed w-9/12">
          <table>
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2">asdaasdsad</th>
                <th className="border border-gray-500 px-4 py-2">asdaasdsad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-4 py-2">asdsa</td>
                <td className="border border-gray-500 px-4 py-2">
                  <button className="btn btn-neutral">Evaluate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
