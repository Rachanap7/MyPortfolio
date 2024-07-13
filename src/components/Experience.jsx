import { useState } from "react";
import useWindowSize from "./useWindowSize";

const Experience = () => {
  const countExperience = 2;
  const [expArr, setExpArr] = useState(
    Array(Number(countExperience)).fill(false)
  );
  const { width } = useWindowSize();
  const myExperience = [
    {
      designation: "Senior Front-end Developer",
      org: "Tata Consultancy Services",
      duration: "04/2023-Present",
      description:
        "Implemented several Java backend APIs, maintained SQL databases, and created UI features. In order to simplify the team's complicated procedures, generic utilities and application templates were developed. Managed end-to-end application handling and developed business applications for diverse clients. Provided leadership and mentorship to the colleagues. Created the process's development documentation.",
    },
    {
      designation: "Front-end Developer",
      org: "Tata Consultancy Services",
      duration: "07/2021-03/2023",
      description:
        "Created internal utilities with an emphasis on process optimization. JavaScript, JQuery, HTML, and CSS were used for UI development, while Java backend APIs were streamlined for effective data flow. Ensured effective delivery by collaborating with QA teams to carry out security and functional testing.",
    },
  ];
  const handleExp = (id) => {
    const copyArray = expArr.slice();
    copyArray[id] = !copyArray[id];
    setExpArr(copyArray);
  };
  return (
    <div
      className="max-w-full m-8 md:ml-20 text-xl font-sans text-white"
      id="experience"
    >
      <div className="text-center font-semibold text-white mb-10 text-3xl">
        Experience
      </div>
      <div className="flex justify-around flex-wrap">
        {myExperience.map((exp, key) => {
          return (
            <div
              className={`flex flex-col w-full shadow-custom rounded-md mb-3 cursor-pointer h-fit ${
                expArr[key]
                  ? "backdrop-blur-sm bg-regal-blue"
                  : "border-2 border-solid border-white skills-icon-hover1"
              }`}
              key={key}
              onClick={() => handleExp(key)}
            >
              <div
                className={`flex justify-between flex-col md:flex-row ${
                  expArr[key] ? "mb-4 mt-4 p-8 pb-0 pt-0" : "p-8 "
                }`}
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="exp-role">{exp.designation}</div>
                  {width >= 768 && <div className="exp-details">|</div>}
                  <div className="exp-details">{exp.org}</div>
                </div>
                <div className="exp-details md:justify-self-end">
                  {exp.duration}
                </div>
              </div>
              {expArr[key] && (
                <p className="bold text-lg leading-relaxed mb-4 p-8">
                  {exp.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
