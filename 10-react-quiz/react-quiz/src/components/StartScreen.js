import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz app!</h2>
      <h3>{numQuestions} question to test your React-Mastery</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's starts</button>
    </div>
  );
}

export default StartScreen;
