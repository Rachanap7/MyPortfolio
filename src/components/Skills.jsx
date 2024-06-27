const Skills = () => {
  const mySkills = [
    "React JS",
    "Redux",
    "TypeScript",
    "JavaScript",
    "JQuery",
    "HTML, CSS",
    "Tailwind CSS",
    "SQL",
    "Java",
  ];
  return (
    <div className="max-w-full m-8 ml-40 text-2xl font-sans text-gray-500 " id="skills">
      <div className="flex justify-evenly">
        <div className="text-left font-semibold text-slate-300 mb-4 text-3xl w-1/4 self-center">
          This is what I use to develop some random stuff..
        </div>
        <div className=" w-1/8 p-10">
          <ol className="font-bold text-ruby list-disc">
            {mySkills.slice(0, 5).map((skill, key) => {
              return (
                <li key={key} className="mb-2 hover:scale-110 transform transition duration-300">
                  {skill}
                </li>
              );
            })}
          </ol>
        </div>
        {mySkills.length > 4 && (
          <div className=" w-1/8 p-10">
            <ol className="font-bold text-ruby list-disc">
              {mySkills.slice(5).map((skill, key) => {
                return (
                  <li key={key} className="mb-2 hover:scale-110 transform transition duration-300">
                    {skill}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
