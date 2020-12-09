import familar from './familar.json';
import knowledgeable from './knowledgeable.json';
import proficient from './proficient.json';
import Skill from './skill';

export default function Skills() {
  return (
    <div id="skill">
      <h2>Skills</h2>
      <hr />

      <div>These are some technologies I had the pleasure of working with!</div>

      <div className="skill-categories">
        <Skill category="Proficient" data={proficient}/>
        <Skill category="Knowledgeable" data={knowledgeable}/>
        <Skill category="Familiar" data={familar}/>
        <Skill category="Familiar" data={familar}/>
        <Skill category="Familiar" data={familar}/>
        <Skill category="Familiar" data={familar}/>
      </div>
    </div>
  );
}
