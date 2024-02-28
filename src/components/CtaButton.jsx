const CtaButton = ({ text }) => {
  return (
    <a
      className="flex justify-between overflow-hidden w-max  items-center gap-2 tracking-widest font-heading font-semibold text-4xl lg:text-6xl text-secondary group duration-300 py-2 relative transition-colors before:transition-all hover:before:w-full before:absolute before:w-0 before:h-2 before:bottom-0 before:left-0 before:right-0 before:bg-black before:bg-[url(../../assets/frame.svg)] before:bg-bottom"
      href="#"
    >
      {text}
      <img
        className="group-hover:-rotate-45 transition-transform duration-300 w-10"
        src="../../assets/arrow_icon2.svg"
        alt="arrow icon"
      />
    </a>
  );
};

export default CtaButton;
