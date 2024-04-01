export default function EligibilityAgreement() {
  return (
    <>
      <div className="border-2 border-red-500">
        <h2>Eligibility and agreement</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sit saepe perspiciatis optio. Excepturi, ullam!
        </p>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="agree"
            name="answer"
            className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
          />
          <label htmlFor="agree" className="ml-2">
            I agree
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="notagree"
            name="answer"
            className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
          />
          <label htmlFor="notagree" className="ml-2">
            I do not agree
          </label>
        </div>
      </div>
    </>
  );
}
