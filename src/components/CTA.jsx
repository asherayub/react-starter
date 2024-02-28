import CtaButton from "./CtaButton";

const CTA = () => {
  return (
    <div className="flex flex-col items-center my-28 max-w-[700px] mx-auto text-center space-y-8">
      <p className="text-muted">TELL US ABOUT YOUR PROJECT</p>
      <h2 className="text-4xl lg:text-6xl font-heading">
        Let’s Make Something Great Together!
      </h2>
      <CtaButton text={"Contact Us"} />
    </div>
  );
};

export default CTA;
