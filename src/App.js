import Header from "./Header";
import "./styles.css";
import Heading from "./Heading";
import Mainprogram from "./Mainprogram";
import { useState } from "react";

const App = () => {
  const[count,setCount]=useState(0)
  const handleClick = () =>{
    setCount(count+1)
  console.log(count)
  console.log("clicked")
  }
  return (
    <div>
      <Header count={count}/>
      <Heading />
      <Mainprogram handleClick={handleClick}/>
    </div>
  );
};
export default App;

