export default function TechnologyCommercialization() {
  return (
    <div className="mt-14 mb-14">
      <h2 className="font-semibold mb-8">
        Technology and Commercialization Readiness Level
      </h2>
      <p className="text-justify">
        This form, adopted from NYSERDA, assists emerging and growing companies
        in determining the technical and commercial maturity of their products
        or innovations. It utilizes a customized and integrated tool that
        measures both the Technology Readiness Level (TRL) and Commercial
        Readiness Level (CRL). This TRL/CRL tool is based on systems developed
        by NASA, DOE, and ARPA-E. Although it has been specifically designed for
        ventures in the clean energy industry, it has also been widely used in
        solutions and ventures across various other industries.
      </p>
      <br />
      <p className="text-justify mb-8">
        For each category, please select the option that best describes the
        current status of your product, solution, or innovation.
      </p>
      <div className="mt-16 text-justify">
        <h2 className="mb-6">Technology</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer1"
              name="answer"
              className=" checked:bg-tanglow   border-black radio h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer1" className="ml-2">
              Project work is beyond basic research and technology concept has
              been defined
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer2"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer2" className="ml-2">
              Applied research has begun and practical application(s) have been
              identified
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer3"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer3" className="ml-2">
              Preliminary testing of technology components has begun, and
              technical feasibility has been established in a laboratory
              environment
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer4"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer4" className="ml-2">
              Initial testing of integrated product/system has been completed in
              a laboratory environment
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer5"
              name="answer"
              className=" checked:bg-tanglow checked:size-5 radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer5" className="ml-2">
              Laboratory scale integrated product/system demonstrates
              performance in the intended application(s)
            </label>
          </div>
        </div>
      </div>
      <div className="mt-16 text-justify">
        <h2 className="mb-6">Product Development</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer6"
              name="answer"
              className="checked:bg-tanglow   radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked 
            />
            <label htmlFor="answer6" className="ml-2">
              Initial product/market fit has been defined
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer7"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer7" className="ml-2">
              Pilot scale product/system has been tested in the intended
              application(s)
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer8"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer8" className="ml-2">
              Demonstration of a full scale product/system prototype has been
              completed in the intended application(s)
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer9"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer9" className="ml-2">
              Actual product/system has been proven to work in its near-final
              form under a representative set of expected conditions and
              environments
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer10"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer10" className="ml-2">
              Product/system is in final form and has been operated under the
              full range of operating conditions and environments
            </label>
          </div>
        </div>
      </div>
      <div className="mt-16 text-justify">
        <h2 className="mb-6">Competitive Landscape</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer11"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer11" className="ml-2">
              Secondary market research has been performed and basic knowledge
              of potential applications and competitive landscape have been
              identified
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer12"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer12" className="ml-2">
              Primary market research to prove the product/system commercial
              feasibility has been completed and basic understanding of
              competitive products/systems has been demonstrated
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer13"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer13" className="ml-2">
              Comprehensive market research to prove the product/system
              commercial feasibility has been completed and intermediate
              understanding of competitive products/systems has been
              demonstrated
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer14"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer14" className="ml-2">
              Competitive analysis to illustrate unique features and advantages
              of the product/system compared to competitive products/systems has
              been completed
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer15"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer15" className="ml-2">
              Full and complete understanding of the competitive landscape,
              target application(s), competitive products/systems, and market
              has been achieved
            </label>
          </div>
        </div>
      </div>
      <div className="mt-16 text-justify">
        <h2 className="mb-6">Product Development/Design</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer16"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer16" className="ml-2">
              One or more initial product hypotheses have been defined
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer17"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer17" className="ml-2">
              Mapping product/system attributes against customer needs has
              highlighted a clear value proposition
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer18"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer18" className="ml-2">
              The product/system has been scaled from laboratory to pilot scale
              and issues that may affect achieving full scale have been
              identified
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer19"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer9" className="ml-2">
              Comprehensive customer value proposition model has been developed,
              including a detailed understanding of product/system design
              specifications, required certifications, and trade-offs
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer20"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer20" className="ml-2">
              Product/system final design optimization has been completed,
              required certifications have been obtained, and product/system has
              incorporated detailed customer and product requirements
            </label>
          </div>
        </div>
      </div>
      <div className="mt-16 text-justify">
        <h2 className="mb-6">Team</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer21"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer21" className="ml-2">
              No team or company in place (single individual, no legal entity)
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer22"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer22" className="ml-2">
              Solely technical or non-technical founder(s) running the company
              with no outside assistance
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer23"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer23" className="ml-2">
              Solely technical or non-technical founder(s) running the company
              with assistance from outside advisors/mentors and/or
              incubator/accelerator
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer24"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer24" className="ml-2">
              Balanced team with technical and business
              development/commercialization experience running the company with
              assistance from outside advisors/mentors
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer25"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer25" className="ml-2">
              Balanced team with all capabilities onboard (e.g., sales,
              marketing, customer service, operations, etc.) running the company
              with assistance from outside advisors/mentors
            </label>
          </div>
        </div>
      </div>
      <div className=" mt-16 text-justify">
        <h2 className="mb-6">Go-to-Market</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer26"
              name="answer"
              className=" checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer26" className="ml-2">
              Initial business model and value proposition have been defined
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer27"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer27" className="ml-2">
              Customers/partners have been interviewed to understand their pain
              points/needs, and business model and value proposition have been
              refined based on customer/partner feedback
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer28"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer28" className="ml-2">
              Market and customer/partner needs and how those translate to
              product requirements have been defined, and initial relationships
              have been developed with key stakeholders across the value chain
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer29"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer29" className="ml-2">
              Partnerships have been formed with key stakeholders across the
              value chain (e.g., suppliers, partners, service providers, and
              customers)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer30"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer30" className="ml-2">
              Supply agreements with suppliers and partners are in place and
              initial purchase orders from customers have been received
            </label>
          </div>
        </div>
      </div>
      <div className="mt-16 text-justify">
        <h2 className="mb-6">Manufacturing/Supply Chain</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer31"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer31" className="ml-2">
              Potential suppliers, partners, and customers have been identified
              and mapped in an initial value chain analysis
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer32"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer32" className="ml-2">
              Relationships have been established with potential suppliers,
              partners, service providers, and customers and they have provided
              input on product and manufacturability requirements
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer33"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer33" className="ml-2">
              Manufacturing process qualifications (e.g. QC/QA) have been
              defined and are in progress
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="answer34"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer34" className="ml-2">
              Products/systems have been pilot manufactured and sold to initial
              customerss
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="answer35"
              name="answer"
              className="checked:bg-tanglow radio border-black h-4 w-4 text-black transition duration-150 ease-in-out" checked
            />
            <label htmlFor="answer35" className="ml-2">
              Full scale manufacturing and widespread deployment of
              product/system to customers and/or users has been achieved
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
