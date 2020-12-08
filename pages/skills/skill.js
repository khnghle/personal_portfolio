export default function Skill(props) {
  const {category, data} = props;
  return (
    <div>
      <h3>{category}</h3>
      <div className="skill-list">
        {data.map((curr) => (
          <div className="skill-list-item">{curr}</div>
        ))}
      </div>
    </div>
  );
}
