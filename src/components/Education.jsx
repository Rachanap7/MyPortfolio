const Education = () => {
  const eduData = [
    {
      edu: "B.E. - I.T.",
      institute: "Terna Engineering college",
      YOP: "2021",
      percentage: "8.9 CGPA",
    },
    {
      edu: "HSC Board",
      institute: "Ramnarain Ruia College",
      YOP: "2017",
      percentage: "72%",
    },
    {
      edu: "SSC Board",
      institute: "I.E.S. Girls School",
      YOP: "2015",
      percentage: "88.80%",
    },
  ];
  return (
    <div className="max-w-full m-8 ml-20 font-sans text-white">
  <div className="text-center font-semibold text-white mb-4 text-3xl">
    Education
  </div>
  <div className="relative flex flex-col items-center w-full">
    <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-gray-200"></div> {/* Vertical line */}
    {eduData.map((entry, key) => {
      const isLeft = key % 2 === 0;
      return (
        <div key={key} className="flex w-full mb-8 items-center">
          <div className={`flex ${isLeft ? 'justify-end w-1/2  px-4' : 'justify-end w-8/12'} relative`}>
            {isLeft && (
              <div className="flex flex-col items-center absolute right-0 transform translate-x-1/2">
                <div className="bg-white rounded-full h-4 w-4 border-2 border-gray-200"></div>
                <div className="border-l-2 border-gray-200 flex-1"></div>
              </div>
            )}
            <div className={`skills-icon-hover border-2 border-solid border-white p-4 rounded-lg shadow-md ${isLeft ? 'text-right' : 'text-left'}`}>
              <div className="font-bold">{entry.edu}</div>
              <div>{entry.institute}</div>
              <div>{entry.percentage}</div>
              <div>{entry.YOP}</div>
            </div>
            {!isLeft && (
              <div className="flex flex-col items-center absolute right-[13.7rem] transform -translate-x-1/2">
                <div className="bg-white rounded-full h-4 w-4 border-2 border-gray-200"></div>
                <div className="border-l-2 border-gray-200 flex-1"></div>
              </div>
            )}
          </div>
        </div>
      );
    })}
  </div>
</div>

  
  );
};

export default Education;
