import { useState } from "react";

const Experience = () => {
  const countExperience = 2;
  const [expArr, setExpArr] = useState(Array(Number(countExperience)).fill(false));
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
  const handleExp =(id)=>{
    const copyArray = expArr.slice();
    copyArray[id]=(!copyArray[id]);
    setExpArr(copyArray);
  }
  return (
    <div className="max-w-full m-8 ml-40 text-3xl font-sans text-gray-500" id="experience">
      <div className="text-center font-semibold text-slate-300 mb-10">
        My Experience
      </div>
      <div className="flex justify-around flex-wrap">
        {myExperience.map((exp, key) => {
          return (
            <div
              className="flex flex-col w-1/2 border-2 max-w-lg backdrop-blur-sm bg-grey-bg rounded-md hover:bg-transparent hover:border-black mb-3 cursor-pointer h-fit"
              key={key} onClick={()=>handleExp(key)}
            >
              {(!expArr[key]) && (
                <>
                  <span className="exp-role mb-1">{exp.designation}</span>
                  <span className="exp-details mb-1">{exp.org}</span>
                  <span className="exp-details mb-1">{exp.duration}</span>
                </>
              )}
              {expArr[key] && (
                <p className="bold text-lg leading-relaxed text-justify p-8">
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
