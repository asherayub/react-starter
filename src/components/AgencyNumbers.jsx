const AgencyNumbers = () => {
  return (
    <div className="bg-[#333333] p-8 sm:p-12 px-10 sm:px-20 my-20 flex flex-col lg:flex-row gap-10 sm:gap-28 items-center">
      <div className="max-w-[450px] space-y-4">
        <h3 className="text-3xl sm:text-5xl font-heading">
          Your Trusted Business Partner
        </h3>
        <p className="text-muted">
          From ideation to graphicdesign, UX/UI design is the historical
          discipline of our agency.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-4xl sm:text-6xl text-center font-heading sm:odd:mr-10 odd:mr-0">
          300+{" "}
          <span className="font-body block text-base text-muted">
            Working People
          </span>
        </p>
        <p className="text-4xl sm:text-6xl text-center font-heading  sm:odd:mr-10 odd:mr-0">
          20+{" "}
          <span className="font-body block text-base text-muted">
            Worldwide Offices
          </span>
        </p>
        <p className="text-4xl sm:text-6xl text-center font-heading  sm:odd:mr-10 odd:mr-0">
          500+{" "}
          <span className="font-body block text-base text-muted">
            Projects Delivered
          </span>
        </p>
        <p className="text-4xl sm:text-6xl text-center font-heading  sm:odd:mr-10 odd:mr-0">
          $25M{" "}
          <span className="font-body block text-base text-muted">
            Funds Raised
          </span>
        </p>
      </div>
    </div>
  );
};

export default AgencyNumbers;
