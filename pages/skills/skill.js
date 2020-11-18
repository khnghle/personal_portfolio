export default function Skill(props) {
  const {category, data} = props;
  return (
    <div>
      <h3>{category}</h3>
      <hr />
      <ul>
        {data.map((curr) => (
          <li>{curr}</li>
        ))}
      </ul>
    </div>
  );
}
