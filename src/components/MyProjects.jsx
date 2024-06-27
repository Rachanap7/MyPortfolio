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
    <div className="max-w-full m-8 ml-40 font-sans text-gray-500" id="projects">
      <div className="text-center font-semibold text-slate-300 mb-4 text-3xl">
        Projects & some Random Stuff
      </div>
      <div className="flex flex-wrap items-center gap-x-36">
        {projectList.map((project, key) => {
          return (
            <div className="backdrop-blur-sm bg-grey-bg w-80 rounded-3xl mb-4 hover:border hover:bg-transparent hover:scale-105 transform transition duration-300">
              <div
                key={key}
                className="flex flex-col text-left p-4 gap-y-2 text-skin-tone1"
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
                  <button className="bg-ruby p-2 rounded-lg hover:bg-white hover:text-black">GitHub</button>
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
