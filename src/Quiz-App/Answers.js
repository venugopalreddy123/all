import React from "react";
const Answer = (props) => {
  const answer = Object.keys(props.answer).map((items, i) => (
    <li
      className={
        props.rightAnswer === items
          ? "correct"
          : props.wrongAnswer === items
          ? "incorrect"
          : ""
      }
      onClick={() => props.checkAnswer(items)}
      key={items}
    >
      {props.answer[items]}
    </li>
  ));
  return (
    <div>
      <ul className="answers">
        <li>{answer}</li>
      </ul>
      <div>
        {props.rightAnswer
          ? "Correct Answer"
          : props.wrongAnswer
          ? "Incorrect Answer"
          : ""}
      </div>
    </div>
  );
};
export default Answer;
