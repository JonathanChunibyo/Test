
//import PrimeraApp from './PrimeraApp';
import Counter from './CounterApp';
import './index.css';

const reactDom = require("react-dom");


const divRoot = document.querySelector('#root');



reactDom.render(<Counter />, divRoot);


