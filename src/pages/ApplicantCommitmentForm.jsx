export default function ApplicantCommitmentForm() {
  return (
    <div className="mt-14">
      <h2 className="font-semibold mb-4">
        Applicant Commitment Verification Form
      </h2>
      <p className="mb-8 text-justify">
        To ensure your commitment to the LaunchLab Program, please respond to
        the following questions with a Yes or No.
      </p>
      <div className="mb-6">
        <h2 className="mb-6 mt-16 text-justify">
          Do you commit to complete and actively cooperate in all scheduled
          activities, workshops, and mentorship sessions during the 4-month
          program of the LaunchLab Program?
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              Yes
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              No
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6 text-justify">
        <h2 className="mb-6 mt-16">
          Do you commit to diligently working towards executing your startup’s
          approved growth plan as outlined in the program?
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              Yes
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              No
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6 text-justify">
        <h2 className="mb-6 mt-16">
          If the founder is not always available, will you assign at least one
          dedicated personnel, directly involved in the aspect of the startup
          being accelerated, to be consistently involved in all program
          activities and deliverables, understanding that changing personnel
          frequently can adversely affect the progress of the acceleration?
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              Yes
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              No
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6 text-justify">
        <h2 className="mb-6 mt-16">
          Do you understand and agree that your evaluation results and
          performance reports will be shared with DOST as part of the program’s
          accomplishment reports?
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              Yes
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className="form-radio h-4 w-4 text-black transition duration-150 ease-in-out"
            />
            <label htmlFor="answer1" className="ml-2">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
