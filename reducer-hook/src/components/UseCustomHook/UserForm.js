import React, { useState } from "react";
import UseInput from "./UseInput";

function UserForm() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name: </label>
          <input
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
            type="text"
          ></input>
        </div>
        <div>
          <label>Last Name: </label>
          <input
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
            type="text"
          ></input>
        </div>
        <button value="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
