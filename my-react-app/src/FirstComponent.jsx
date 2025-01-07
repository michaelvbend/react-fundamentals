import { useEffect, useState } from "react";
import Counter from "./Counter";
import Rule from "./Rule";

function FirstComponent() {
  // TELL ABOUT MOVING THE COUNTER TO OWN COMPONENT TO PREVENT RE_RENDERING
  // let counter = 0;

  // const handleButtonClick = () => {
  //   counter++;
  // }
  const [counter, setCounter] = useState(0);
  const handleButtonClick = () => {
    setCounter(counter + 1);
  }

  console.log("Also the whole component is re-rendered");

  // useEffect(() => {
  //     console.log('Counter has been updated', counter);
  //   }, [counter]);
  const rules = ['Function name starts with uppercase character', 'Returns single renderable content'];

  return (
    <>
      <h1>All Rules:</h1>
      {rules.map(rule => <Rule key={rule} rule={rule} />)}
    </>
  )

  // return (
  //   <>
  //   <div>
  //     <h1>First rule</h1>
  //     <p>Function name starts with uppercase character</p>
  //     <h2>Second rule</h2>
  //     <p>Returns single renderable content</p>
  //   </div>
  //   <Counter />
  //   </>
  // );
}

export default FirstComponent;
