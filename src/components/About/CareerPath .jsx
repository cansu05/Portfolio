import { experienceData } from "../../data";

const CareerPath = () => {
  return (
    <section className=" max-w-7xl align-element flex flex-col items-start justify-center py-10 mt-5">
      <h2 className="text-xl font-bold text-left">Deneyimlerim</h2>
      {experienceData.map((exp, index) => (
        <div key={index} className="flex items-center gap-4 mt-5">
          <div className="relative w-6 flex justify-center">
            <div className="w-1 h-1 bg-gray-800 rounded-full absolute top-1/2 -translate-y-1/2"></div>
            {index !== experienceData.length - 1 && (
              <div className="absolute w-px h-full bg-gray-300 top-0 left-1/2 -translate-x-1/2"></div>
            )}
          </div>

          <div className="flex items-center gap-8">
            <span className="bg-[#908275] text-white px-3 py-1 rounded-lg text-sm min-w-[150px] text-center">
              {exp.year}
            </span>
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-gray-800 text-sm">{exp.position}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CareerPath;
