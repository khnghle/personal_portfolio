export default function Project(props) {
  const { name, description, tools, img, links } = props.data;
  return (
    <div className="project-container">
      <img src={img} className="project-img"></img>
      <div className="project-text">
        <div>{name}</div>
        <div>{description}</div>
      </div>
      <div>
        Technologies Used:
        <span className="project-links">
          {links.link ? (
            <a href={links.link}>
              <i className="fas fa-link" />
            </a>
          ) : (
            ''
          )}
          {links.video ? (
            <a href={links.video}>
              <i className="fab fa-youtube" />
            </a>
          ) : (
            ''
          )}
          {links.github ? (
            <a href={links.github}>
              <i className="fab fa-github" />
            </a>
          ) : (
            ''
          )}
        </span>
      </div>

      <div className="skill-list">
        {tools.map((curr) => (
          <div key={curr} className="skill-list-item project">
            {curr}
          </div>
        ))}
      </div>
    </div>
  );
}
