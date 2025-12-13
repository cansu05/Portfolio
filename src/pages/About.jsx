import CareerPath from "../components/About/CareerPath ";
import PersonalDetails from "../components/About/PersonalDetails";
import Knowledge from "../components/About/Knowledge";

const About = () => {
  return (
    <div className="my-20 lg:mt-20 mt-32">
      <PersonalDetails />
      <CareerPath />
      <Knowledge />
    </div>
  );
};

export default About;
