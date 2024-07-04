import './App.css';
import{useSelector,useDispatch} from 'react-redux'
import {actions}  from './store/index';
function App() {
const counter=useSelector((state)=>(state.counter)); //read the value from the store and subscribes to update
const dispatch=useDispatch() //sends actions to update data
const increment=()=>{
  dispatch(actions.increment())
};
const decrement=()=>{
  dispatch(actions.decrement(20))
};
const addBy=()=>{
  dispatch(actions.addBy(70)) //contains payload
};
  return (
<>
<h1>Counter App</h1>
<h2>{counter}</h2>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={addBy}>Add BY</button>

</>
  );
}

export default App;
