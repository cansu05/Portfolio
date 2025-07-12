import portfolio from "../assets/portfolio.jpg";
import TypeWriter from "../components/TypeWriter";
import { socials } from "../data";

const Landing = () => {
  return (
    <section className="align-element min-h-[calc(100vh-80px)] flex lg:flex-row flex-col items-center justify-center gap-20">
      <div>
        <img
          src={portfolio}
          alt="portfolio"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className=" flex flex-col items-start sm:items-center justify-center gap-6">
          <h1 className="text-4xl font-black">CANSU UGUR</h1>
          <TypeWriter text="Front-end Developer" />
          <p className="text-gray-500 text-base font-medium tracking-wider max-w-lg  ">
            I develop user-centric, high-performance web interfaces with a
            strong focus on clean structure, scalability, and smooth user
            experience.
          </p>
        </div>
        <div className="flex gap-2 sm:justify-center">
          {socials.map((social) => {
            const { id, href, icon } = social;
            return (
              <a key={id} href={href} target="_blank">
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Landing;
