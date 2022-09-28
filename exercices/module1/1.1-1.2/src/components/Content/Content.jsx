
import Part from "components/Part/Part";
  const Content = (props) =>{
    return (
      <div>
        <Part name={props.name1} number={props.number1}/>
        <Part name={props.name2} number={props.number2}/>
        <Part name={props.name3} number={props.number3}/>
      </div>
    )
  };
  export default Content;