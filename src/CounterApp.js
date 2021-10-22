
import  { useState } from "react";
import PropTypes from "prop-types";



const Counter = ( { value = 10} ) => {

    const [count, setCount]= useState(value);

const func = () => {
   setCount(count +10);
   //setCount( (c) => c + 1);
}
const func2 = () => {
    setCount(value );
 }
 const func3 = () => {
    setCount(count - 10);
 }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <h2>{count}</h2>
            <button onClick= { func }> +10 </button>
            <button onClick= { func2 }> RESET</button>
            <button onClick= { func3 }> -10 </button>
        </>
    );

}

Counter.propTypes = {
     value: PropTypes.number.isRequired ,
}
export default Counter;