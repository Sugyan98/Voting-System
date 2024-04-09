import React, { useState } from "react";
import Input from "./Components/Input";
import Votes from "./Components/Votes";

import styles from "./App.module.css";

function App() {
  const [voterLi, setVoterLi] = useState([]);

  const onVote = (vote) => {
    setVoterLi([...voterLi, vote]);
  };

  const removeItem = (id) => {
    setVoterLi((prevState) => {
      const newVoterLi = prevState.filter((vote) => vote.id !== id);
      return newVoterLi;
    });
  };

  let count = voterLi.length;

  return (
    <div className={`${styles["App"]}`}>
      <div className={`${styles["Heading"]}`}>
        <h1>Class Monitor Vote</h1>
        <p>Total Votes: {count}</p>
      </div>
      <Input onVote={onVote} />
      <Votes items={voterLi} delete={removeItem} />
    </div>
  );
}

export default App;
