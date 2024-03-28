export default function AboutProposedAcceleration() {
  return (
    <div className="border-2 border-gray-500 p-4">
      <h2>II. About the Proposed Acceleration</h2>
      <div className="border-2 border-rose-500">
        <p>A. Objectives</p>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            id="OrderNotes"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="4"
            placeholder="type something here..."
          ></textarea>
        </div>
      </div>
      <div className="border-2 border-rose-500">
        <p>B. Scope of the proposal</p>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            id="OrderNotes"
            className="bg-white w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="4"
            placeholder="type something here..."
          ></textarea>
        </div>
      </div>
      <div className="border-2 border-rose-500">
        <p>C. Methodology and expected outputs</p>
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
  );
}
