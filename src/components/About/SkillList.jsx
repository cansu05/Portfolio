import { skillsData } from "../../data";

const SkillList = () => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-gray-600 gap-2 list-disc pl-5">
      {skillsData.map((skill, index) => (
        <li key={index} className="text-base">
          {skill}
        </li>
      ))}
    </ul>
  );
};
export default SkillList;
