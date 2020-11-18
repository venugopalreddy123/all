import React from "react";
import Answer from "./Answers";
import Question from "./Question";
import "./Styles.css";
class Quiz extends React.Component {
  state = {
    questions: {
      1: "What is Your Goal ?",
      2: "What is Your Importance ?",
      3: "Which is Favourite city ?",
      4: "Which is your favourite Drink ?",
      5: "Which is your favourite Dish ?",
    },
    answers: {
      1: {
        1: "Business Man",
        2: "Big Celabrity",
        3: "Strong Politician",
        4: "Richest In the World",
      },
      2: {
        1: "Money",
        2: "Power",
        3: "Relations",
        4: "All Above",
      },
      3: {
        1: "Tirupati",
        2: "Kakinada",
        3: "Kadapa",
        4: "Chennai",
      },
      4: {
        1: "Budwiser",
        2: "Tuoburg",
        3: "King Fisher",
        4: "Knock Out",
      },
      5: {
        1: "Fish Fry",
        2: "Chicken Fry",
        3: "Mutton Fry",
        4: "Egg Fry",
      },
    },
    correctAnswers: {
      1: "1",
      2: "4",
      3: "2",
      4: "1",
      5: "1",
    },
    rightAnswer: 0,
    wrongAnswer: 0,
    step: 1,
    score: 0,
  };
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        rightAnswer: correctAnswers[step],
        wrongAnswer: answer,
      });
    } else {
      this.setState({
        score: 0,
        rightAnswer: 0,
        wrongAnswer: answer,
      });
    }
  };
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      score: 0,
    });
  };
  prevStep = (step) => {
    this.setState({
      step: step - 1,
      score: 0,
    });
  };
  render() {
    const {
      questions,
      step,
      answers,
      rightAnswer,
      wrongAnswer,
      score,
    } = this.state;
    return (
      <div>
        {step <= Object.keys(questions).length ? (
          <div>
            <h1>Welcome To Quiz Programme</h1>
            <Question question={questions[step]} />
            <Answer
              answer={answers[step]}
              checkAnswer={this.checkAnswer}
              rightAnswer={rightAnswer}
              wrongAnswer={wrongAnswer}
            />
            <button className="nexts" onClick={() => this.nextStep(step)}>
              NEXT
            </button>
            {step > 1 && (
              <button className="prevs" onClick={() => this.prevStep(step)}>
                PREVIOUS
              </button>
            )}
          </div>
        ) : (
          <div>
            <h1>Thanks for Completing Your Quiz</h1>
            <p>
              Your Score is {score} out of {Object.keys(questions).length}
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default Quiz;
