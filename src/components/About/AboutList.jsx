import { aboutData } from "../../data";

const AboutList = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
      {Object.entries(aboutData).map(([key, value]) => (
        <div key={key} className="flex gap-2">
          <span className="capitalize text-gray-950 font-semibold">{key}:</span>
          <span className="text-gray-500">{value}</span>
        </div>
      ))}
    </div>
  );
};
export default AboutList;
