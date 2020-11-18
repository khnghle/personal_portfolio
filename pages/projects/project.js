export default function Project(props) {
  const {name, description, role, tools, img} = props.data;
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{role}</div>
      <div>{tools}</div>
      <div>{img}</div>
    </div>
  )
}