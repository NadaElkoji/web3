import Header from "components/Header/Header"
import Content from "components/Content/Content"
import Total from "components/Total/Total"
import './App.css'
const App = () => {
    // const-definitions
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content name1={part1} number1={exercises1} name2={part2} number2={exercises2} name3={part3} number3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App