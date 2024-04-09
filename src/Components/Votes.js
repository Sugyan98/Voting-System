import React from "react";
import Passwordlist from "./VoterList";

const Votes = (props) => {
  const SureshVotes = props.items.filter((votes) => {
    return votes.monitor === "Suresh";
  });
  const DeepankVotes = props.items.filter((votes) => {
    return votes.monitor === "Deepank";
  });
  const AbhikVotes = props.items.filter((votes) => {
    return votes.monitor === "Abhik";
  });

  return (
    <React.Fragment>
      <h2>SureshVotes</h2>
      <p>Count: {SureshVotes.length} </p>
      {SureshVotes.map((element) => (
        <Passwordlist id={element.id} delete={props.delete}>
          {element.student}
        </Passwordlist>
      ))}
      <h2>DeepankVotes</h2>
      <p>Count: {DeepankVotes.length} </p>
      {DeepankVotes.map((element) => (
        <Passwordlist id={element.id} delete={props.delete}>
          {element.student}
        </Passwordlist>
      ))}
      <h2>AbhikVotes</h2>
      <p>Count: {AbhikVotes.length} </p>
      {AbhikVotes.map((element) => (
        <Passwordlist id={element.id} delete={props.delete}>
          {element.student}
        </Passwordlist>
      ))}
    </React.Fragment>
  );
};

export default Votes;
