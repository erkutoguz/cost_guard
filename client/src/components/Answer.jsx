import React from "react";
import "../App.css";
function Answer({ answer }) {
  return (
    <div className="answer-box">
      <p>{answer}</p>
    </div>
  );
}

export default Answer;
