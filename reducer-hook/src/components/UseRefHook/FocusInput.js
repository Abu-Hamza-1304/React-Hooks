import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element using useRef
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;

/*
    Step 1: import useRef from react
    Step 2: create a Ref variable by calling useRef
            by passing in the initialValue
    Step 3: once we create the ref, we need to attach
            it to the input element by making use of
            reserved "ref" attribute
    Step 4: then call focus method on input element
*/
