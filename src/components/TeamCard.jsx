const TeamCard = ({
  image,
  name,
  title,
  twitter,
  behance,
  linkedin,
  instagram,
}) => {
  return (
    <div className="relative w-max my-4 group">
      <img src={image} alt="" />
      <div className="social_links flex  items-center gap-4 absolute bottom-32 lg:bottom-24 opacity-100 lg:opacity-0 group-hover:opacity-100 group-hover:bottom-32 transition-all left-1/2 -translate-x-1/2">
        <a href={twitter}>
          <img
            className="scale-150"
            src="../../assets/x_icon.svg"
            alt="twitter icon"
          />
        </a>
        <a href={behance}>
          <img
            className="scale-150"
            src="../../assets/behance_icon.svg"
            alt="behance icon"
          />
        </a>
        <a href={linkedin}>
          <img
            className="scale-150"
            src="../../assets/linkedin_icon.svg"
            alt="linkedin icon"
          />
        </a>
        <a href={instagram}>
          <img
            className="scale-150"
            src="../../assets/instagram_icon.svg"
            alt="instagram icon"
          />
        </a>
      </div>
      <h2 className="text-2xl font-heading my-3">{name}</h2>
      <p className="text-xs text-muted">{title}</p>
    </div>
  );
};

TeamCard.defaultProps = {
  image: "zeus.jpg",
  name: "NAME",
  title: "TITLE",
  twitter: "#",
  behance: "#",
  linkedin: "#",
  instagram: "#",
};

export default TeamCard;
