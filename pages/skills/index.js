import familar from './familar.json';
import knowledgeable from './knowledgeable.json';
import proficient from './proficient.json';
import Skill from './skill';

export default function Skills() {
  return (
    <div id="skill">
      <h2>Skills</h2>
      <hr />

      <p>Short description about my skills</p>

      <div className="skill-categories">
        <Skill category="Familar" data={familar}/>
        <Skill category="Knowledgeable" data={knowledgeable}/>
        <Skill category="Proficient" data={proficient}/>
      </div>
    </div>
  );
}
