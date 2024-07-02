import { SiJavascript,SiRedux,SiTypescript } from "react-icons/si";
import { FaReact,FaHtml5,FaCss3Alt,FaJava } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
const Skills = () => {
  const mySkills = [
    {
      name:"React JS",
      icon:<FaReact/>,
    },
    {
      name:"Redux",
      icon:<SiRedux/>,
    },
    {
      name:"TypeScript",
      icon:<SiTypescript/>,
    },
    {
      name:"JavaScript",
      icon:<SiJavascript/>,
    },
    {
      name:"JQuery",
      icon:<DiJqueryLogo/>,
    },
    {
      name:"HTML",
      icon:<FaHtml5/>,
    },
    {
      name:"CSS",
      icon:<FaCss3Alt/>,
    },
    {
      name:"Tailwind CSS",
      icon:<RiTailwindCssFill/>,
    },
    {
      name:"SQL",
      icon:<BsFiletypeSql/>,
    },
    {
      name:"Java",
      icon:<FaJava/>,
    }
  ];
  return (
    <div className="max-w-full m-8 ml-20 text-2xl font-sans text-white" id="skills">
      <div className="text-center">
        <div className="font-semibold mb-4 text-3xl">
          Skills
        </div>
        {
          <div className="grid gap-6 grid-cols-4 grid-rows-3">{

            mySkills.map((skills,key)=>{
              return(
              <div key={key} className="font-bold grid justify-items-center">
                <span className="skills-icon cursor-pointer skills-icon-hover">{skills.icon}</span>
                {skills.name}
              </div>
              
              )
            })
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Skills;
