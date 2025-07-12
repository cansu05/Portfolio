import { educationData } from "../../data";

const EducationList = () => {
  return (
    <div className="flex flex-col gap-6 relative">
      <h2 className="text-2xl font-bold text-left">Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="relative w-6 flex justify-center">
            <div className="w-2 h-2 bg-gray-700 rounded-full absolute top-1/2 -translate-y-1/2"></div>
            {index !== educationData.length - 1 && (
              <div className="absolute w-px h-full bg-gray-300 top-0 left-1/2 -translate-x-1/2"></div>
            )}
          </div>

          <div className="flex items-center gap-8">
            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-md text-sm">
              {edu.year}
            </span>
            <div>
              <h3 className="font-semibold">{edu.institution}</h3>
              <p className="text-gray-500 text-sm">{edu.degree}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EducationList;
