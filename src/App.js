import React from "react";
import "./App.css";
import Quiz from "./Quiz-App/Quiz";
import Quizapp2 from "./Quizapp2/Quizapp2";
import Filter from "./SearchApp/Filter";
import Ships from "./Ships-App/Ships";
import Signup from "./Signup/Signup";
import Todo2 from "./Todo-aoo2/Todo2";
import Todo from "./Todo-App/Todo";
import Weather from "./Weather/Weather";
import Weather2 from "./Weather2/Weather2";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Images from "./Images/Images";
import Currency from "./Currency App/Currency";

function App() {
  return (
    // <div>
    //   <Currency />
    // </div>
    <div>
      <Images />
    </div>
    // <div className="App">
    //   <div></div>
    //   <div>
    //     <Router>
    //       <Link to="/filter">Filter</Link>
    //       <br />
    //       <Link to="/ships">Ships</Link>
    //       <br />
    //       <Link to="/quizapp2">Quizapp 2</Link>
    //       <br />
    //       <Link to="/quiz">Quiz</Link>
    //       <br />
    //       <Link to="/weather2">Weather 2</Link>
    //       <br />
    //       <Link to="/weather">Weather</Link>
    //       <br />
    //       <Link to="/todo2">Todo 2</Link>
    //       <br />
    //       <Link to="/todo">Todo</Link>
    //       <br />
    //       <Link to="/signup">Sign Up</Link>
    //       <br />

    //       <hr />
    //       <Route path="/filter" component={Filter} />
    //       <Route path="/ships" component={Ships} />
    //       <Route path="/quizapp2" component={Quizapp2} />
    //       <Route path="/quiz" component={Quiz} />
    //       <Route path="/weather2" component={Weather2} />
    //       <Route path="/weather" component={Weather} />
    //       <Route path="/todo2" component={Todo2} />
    //       <Route path="/todo" component={Todo} />
    //       <Route path="/signup" component={Signup} />
    //     </Router>
    // </div>
    // </div>
  );
}

export default App;
