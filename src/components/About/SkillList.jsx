import { skillsData } from "../../data";

const SkillList = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-0 gap-4 mt-4">
      {skillsData.map((item, index) => (
        <div key={index}>
          <h3 className="font-semibold text-lg mb-2">{item.category}</h3>

          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            {item.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
