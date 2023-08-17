function Projects() {
  const listOfProjects = [
    {
      name: "Bank Management System",
      about: {
        technology: "Spring boot 3, MySQL, Jenkins, Agile Methodology",
        features: [
          "user can apply for loans",
          "user can update details",
          "user can register itself",
        ],
      },
    },
    {
      name: "Online Shopping",
      about: {
        technology: "Spring boot 3, JUnit, MongoDB, ReactJS, MUI, AWS Elastic Beanstalk",
        features: [
          "user can apply for loans",
          "user can update details",
          "user can register itself",
        ],
      },
    },
  ];

  return <div className="bg-slate-500">
    {listOfProjects.map(e => <div className="mx-3 pt-3" key={e.name}> 
        <h2 className="text-2xl">{e.name}</h2>
        <h3 className="text-xl">Technology Used : {e.about.technology}</h3>
        <ul>
            {e.about.features.map(l => <li className="italic mx-4" key={l}>{l}</li>)}
        </ul>
    </div>)}
  </div>;
}

export default Projects;
