import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Question = (props) => {
  const [question, setQuestion] = useState({});
  //   useEffect(() => {
  //     if (props) {
  //       setQuestion(props.question);
  //     }
  //   }, []);
  return (
    <div>
      <h1>{props.question}</h1>
    </div>
  );
};
export default Question;
