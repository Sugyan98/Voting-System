import React, { useRef } from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  const studentRef = useRef("");
  const monitorRef = useRef("");

  const onClick = (event) => {
    event.preventDefault();

    if (studentRef.current.value.trim().length === 0) {
      return;
    }

    let Vote = {
      student: studentRef.current.value,
      monitor: monitorRef.current.value,
      id: Math.random().toString(),
    };

    props.onVote(Vote);
    studentRef.current.value = "";
  };

  return (
    <form className={`${styles["Form"]}`}>
      <label>Student Name:</label>
      <input ref={studentRef} type="text" />
      <label>Choose Monitor:</label>
      <select ref={monitorRef}>
        <option value="Suresh">Suresh</option>
        <option value="Deepank">Deepank</option>
        <option value="Abhik">Abhik</option>
      </select>
      <button onClick={onClick}>Vote</button>
    </form>
  );
};

export default Input;
