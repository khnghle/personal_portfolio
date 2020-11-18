import projectData from './project.json';
import Project from './project';

export default function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <hr />

      <div>Short description about my projects</div>

      <div className="project-list">
        {projectData.map((curr) => (
          <Project data={curr} key={curr.id} />
        ))}
      </div>
    </div>
  );
}
