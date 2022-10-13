import Button from 'components/Button/Button'
import Statistics from 'components/Statistics/Statistics'
import { useState } from 'react'
import Loading from 'components/Loading/Loading'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);
  //const [allButtons,setAll] = useState([])
  if(loading){
    return (
      <div>
        <Loading/>
      </div>
    )
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text="Good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text="Bad"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App