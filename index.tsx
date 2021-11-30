const arr = [1, 2, 3, 4]

export const App = ({ aaa }) => {
  return (
    <div>
      {aaa}
      {arr.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
