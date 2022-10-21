import { Context as CounterContext} from "../../contexts/counterContext";
import { useContext } from "react";
const App = () => {
   const { good, increaseGood , ok , increaseOk , bad , increaseBad , resetAll } = useContext(CounterContext)

   return(
    <div>
        <div>
             Good {good}
            <button onClick={increaseGood}>increase Good</button>
        </div>
        <div>
            Ok {ok}
            <button onClick={increaseOk}>increase Ok</button>
        </div>
        <div>
            Bad {bad}
            <button onClick={increaseBad}>increase Bad</button>
        </div>
        <div>
            <button onClick={resetAll}>Reset scores</button>
        </div>
    </div>
   )
}
export default App;
