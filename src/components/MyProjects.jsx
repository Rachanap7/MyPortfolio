const MyProjects = () => {
  const projectList = [
    {
      name: "Todo App",
      techStack: "Next JS | TypeScript",
      githubLink: "https://github.com/Rachanap7/TodoAppwithNextJs",
      preview: "/Todo.png",
    },
    {
      name: "My Notes App",
      techStack: "React JS | Firebase",
      githubLink: "https://github.com/Rachanap7/MyNotesApp",
      preview: "/NoteApp.png",
    },
    {
      name: "Mood Tracker",
      techStack: "React JS | LocalStorage | Bootstrap",
      githubLink: "https://github.com/Rachanap7/MoodTracker",
      preview: "/MoodTracker.png",
    },
    {
      name: "Tic Tac Toe",
      techStack: "React JS | Bootstrap",
      githubLink: "https://github.com/Rachanap7/TicTacToe",
      preview: "/TicTacToe.png",
    },
    {
      name: "Thala for a reason",
      techStack: "React JS | Bootstrap",
      githubLink: "https://github.com/Rachanap7/Thala-for-a-reason",
      preview: "/Thala.png",
    },
    {
      name: "My Portfolio",
      techStack: "React JS | Tailwind CSS",
      githubLink: "https://github.com/Rachanap7/Thala-for-a-reason",
      preview: "/Portfolio.png",
    },
  ];
  return (
    <div className="max-w-full m-8 md:ml-20 font-sans text-gray-500" id="projects">
      <div className="text-center font-semibold text-white mb-6 text-3xl">
        Projects
      </div>
      <div className="flex flex-wrap items-center gap-x-36 justify-center">
        {projectList.map((project, key) => {
          return (
            <div className="border-2 border-solid border-white w-80 rounded-3xl mb-8 shadow-custom cursor-pointer skills-icon-hover" onClick={()=>window.open(project.githubLink,"_blank")} key={key}>
              <div
                className="flex flex-col text-left p-4 gap-y-2 text-white"
              >
                <img
                  src={project.preview}
                  alt={project.preview}
                  className="rounded-3xl w-full h-48"
                ></img>
                <span className="font-bold">{project.name}</span>
                <span>{project.techStack}</span>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-regal-blue p-2 rounded-lg hover:bg-white hover:text-black">GitHub</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
