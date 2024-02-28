import AgencyNumbers from "../components/AgencyNumbers";
import CTA from "../components/CTA";
import OurTeam from "../components/OurTeam";

const About = () => {
  return (
    <section className="py-8 mx-8 lg:mx-32">
      <h1 className="text-7xl lg:text-[140px] text-center font-heading md:mb-16">
        About Us.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 place-items-center">
        <div className=" md:col-span-7 lg:max-w-[570px] space-y-10 justify-self-start">
          <h2 className="text-4xl lg:text-6xl mt-8 lg:mt-0 font-heading">
            Your Trusted Business Partner
          </h2>
          <p className="text-base text-muted">
            At Web Olympus, we are a team of seasoned professionals driven by a
            common goal - to help businesses thrive in the digital landscape.
            With years of experience in the industry, we understand the
            ever-evolving nature of the web and the importance of staying ahead
            in the competitive online sphere.
          </p>
        </div>
        <div className=" md:col-span-5 lg:justify-self-end">
          <img src="../../assets/about_us_img1.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 place-items-center">
        <div className="lg:justify-self-start md:col-span-8 mt-12 lg:mt-0">
          <img src="../../assets/about_us_img2.png" alt="" />
        </div>
        <div className=" md:col-span-4">
          <img src="../../assets/about_us_img3.png" alt="" />
        </div>
      </div>
      <AgencyNumbers />
      <OurTeam />
      <CTA />
    </section>
  );
};

export default About;
