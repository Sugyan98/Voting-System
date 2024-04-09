import React from "react";

const Passwordlist = (props) => {
  const onDelete = () => {
    props.delete(props.id);
  };

  console.log("hi");

  return (
    <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
      <li key={props.id}>
        {props.children}
        <button onClick={onDelete}>delete</button>
      </li>
    </ul>
  );
};

export default Passwordlist;
