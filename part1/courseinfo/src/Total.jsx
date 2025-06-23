
const Total = (props) => {
  const parts = props.parts;
  let total = 0;
  total += parts[0].exercises;
  total += parts[1].exercises;
  total += parts[2].exercises;

  return (
    <p>Number of exercises {total}</p>
  )
}

export default Total