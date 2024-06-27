const Education = () => {
  return (
    <div className="max-w-full m-8 ml-40 font-sans text-gray-500">
      <div className="text-center font-semibold text-slate-300 mb-4 text-3xl">
        Education
      </div>
      <div className="flex justify-evenly items-center">
        <div className="w-72 h-72">
          <img
            src={"/EduPhoto.jpg"}
            alt="EduPhoto"
            className="rounded-full w-full h-full"
          ></img>
        </div>
        <div className="flex text-lg max-w-60 max-h-40">
          <div className="flex flex-col backdrop-blur-sm bg-grey-bg rounded-md text-left p-4">
            <span className="edu mb-1 font-bold">Degree</span>
            <span className="edu-details mb-1">
              B.E. Information Technology - 2021
            </span>
            <span className="edu-details mb-1">8.9 CGPA </span>
          </div>
        </div>
        <div className="flex text-lg max-w-60 max-h-40">
          <div className="flex flex-col backdrop-blur-sm bg-grey-bg rounded-md text-left p-4">
            <span className="edu mb-1 font-bold">HSC</span>
            <span className="edu mb-1 font-bold">Ramnarain Ruia College</span>
            <span className="edu-details mb-1">2017</span>
            <span className="edu-details mb-1">72%</span>
          </div>
        </div>
        <div className="flex text-lg max-w-60 max-h-40">
          <div className="flex flex-col backdrop-blur-sm bg-grey-bg rounded-md text-left p-4">
            <span className="edu mb-1 font-bold">SSC</span>
            <span className="edu mb-1 font-bold">I.E.S. Girls School</span>
            <span className="edu-details mb-1">2015</span>
            <span className="edu-details mb-1">88.80%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
