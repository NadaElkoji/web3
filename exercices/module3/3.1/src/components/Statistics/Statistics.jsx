import StatisticLine from "components/StatisticLine/StatisticLine"
const Statistics = (props) => {
    const all = props.bad+props.neutral+props.good
    if(all === 0){
        return (
            <div>
                <h1>Statistics</h1>
                <p>Not available</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Statistics</h1> 
            <table>
                <tbody>
                        <StatisticLine text="Good" statistic={props.good}/>
                        <StatisticLine text="Neutral" statistic={props.neutral}/>
                        <StatisticLine text="Bad" statistic={props.bad}/>
                        <StatisticLine text="All" statistic={all}/>
                        <StatisticLine text="Average" statistic={(props.good-props.bad)/100}/>
                        <StatisticLine text="Positive" statistic={(props.good/(all))*100}/>
                </tbody>
            </table> 
        </div>
    )
}
export default Statistics;