import React, { useState, useRef, useEffect } from "react";

const Reflearning = () => {
  const [state, setState] = useState(0);
  const a = useRef(0);
  let b = 0;
  const onIncrement = () => {
    b++;
    a.current++;
    setState(state + 1);
  };

  useEffect(() => {
    console.log(a, "a");
    console.log(b, "b");
    console.log(state, "state");
  }, [a, b, state]);
  return (
    <div>
      <button onClick={() => onIncrement()}>Click</button>
    </div>
  );
};

export default Reflearning;
