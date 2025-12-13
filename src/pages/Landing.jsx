import portfolio from "../assets/portfolio-image.png";
import TypeWriter from "../components/TypeWriter";
import { socials } from "../data";

const Landing = () => {
  return (
    <section className="align-element min-h-[calc(100vh-80px)] h-screen flex lg:flex-row flex-col items-center justify-center lg:gap-20 gap-10 lg:mt-0 ">
      <div>
        <img src={portfolio} alt="portfolio" className="w-[500px] h-full" />
      </div>

      <div className="flex flex-col gap-3 ">
        <div className="flex flex-col  justify-center gap-4">
          <h1 className="text-4xl font-black ">CANSU UGUR</h1>
          <TypeWriter text="Front-end Developer" />
          <p className="text-gray-700 text-base font-medium tracking-wider max-w-lg  ">
            Kullanıcı deneyimini merkeze alan, performanslı ve sürdürülebilir
            web arayüzleri geliştiriyorum. Modern frontend teknolojileriyle
            ölçeklenebilir çözümler üretiyorum.
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
