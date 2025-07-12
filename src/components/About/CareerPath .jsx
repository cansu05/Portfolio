import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";

const CareerPath = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:p-10">
      <div className="bg-white max-w-6xl w-full lg:p-20 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <EducationList />
          <ExperienceList />
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
