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

  return <div className="">
    {listOfProjects.map(e => <div key={e.name}> 
        <h2>{e.name}</h2>
        <h3>{e.about.technology}</h3>
        <ul>
            {e.about.features.map(l => <li key={l}>{l}</li>)}
        </ul>
    </div>)}
  </div>;
}

export default Projects;
