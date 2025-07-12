import SkillList from "./SkillList";

const Knowledge = () => {
  return (
    <section className="flex flex-col items-center justify-center p-10">
      <div className=" max-w-5xl w-full ">
        <h2 className="text-lg font-bold tracking-wide  mb-5">Knowledge</h2>
        <SkillList />
      </div>
    </section>
  );
};
export default Knowledge;
