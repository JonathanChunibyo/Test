
import  { useState } from "react";
import PropTypes from "prop-types";



const Counter = ( { value = 10} ) => {

    const [count, setCount]= useState(value);

const func = () => {
   setCount(count + value);
   //setCount( (c) => c + 1);
}
const func2 = () => {
    setCount(value );
 }
 const func3 = () => {
    setCount(count - value);
 }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{count}</h2>
            <button onClick= { func }> + {value} </button>
            <button onClick= { func2 }> R {value}</button>
            <button onClick= { func3 }> - {value} </button>
        </>
    );

}

Counter.defaultProps = {
    value: 100,
}

Counter.propTypes = {
     value: PropTypes.number.isRequired ,
}

export default Counter;