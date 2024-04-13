export default function EligibilityAgreement() {
  return (
    <>
      <div className="mt-20 mb-14">
        <h2 className="font-semibold mb-4">Eligibility and agreement</h2>
        <p className="mb-8 text-justify">
          I confirm that I have read, understood, and agree to comply with the
          eligibility criteria and rules of LaunchLab program.
        </p>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="agree"
            name="answer"
            className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
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
            className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked    
          />
          <label htmlFor="notagree" className="ml-2">
            I do not agree
          </label>
        </div>
      </div>
    </>
  );
}
