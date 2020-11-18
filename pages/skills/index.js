import familar from './familar.json';
import knowledgeable from './knowledgeable.json';
import proficient from './proficient.json';

export default function Skills() {
  return (
    <div id="skill">
      <h2>Skills</h2>
      <hr />

      <div className="skill-categories">
        <div>
          <h3>Familar</h3>
          <hr />
          <ul>
            {familar.map((curr) => (
              <li>{curr}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Knowledgeable</h3>
          <hr />
          <ul>
            {knowledgeable.map((curr) => (
              <li>{curr}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Proficient</h3>
          <hr />
          <ul>
            {proficient.map((curr) => (
              <li>{curr}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
