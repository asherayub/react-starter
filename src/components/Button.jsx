const Button = ({ text }) => {
  return (
    <a
      className="flex justify-between w-max items-center gap-2 tracking-widest font-semibold text-base group hover:bg-secondary border border-white px-4 transition-colors duration-300 py-2"
      href="#"
    >
      {text}
      <img
        className="group-hover:-rotate-45 transition-transform duration-300"
        src="../../assets/arrow_icon.svg"
        alt="arrow icon"
      />
    </a>
  );
};

export default Button;
