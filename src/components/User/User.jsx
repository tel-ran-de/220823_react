export const User = ({ name, address, age, profession }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{profession}</h2>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  )
}
