import React from "react";
import classes from "./ActiveQuiz.module.css";

import AnswerList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>Как дела?</strong>
        </span>
        <small>1 из 10</small>
      </p>
      <AnswerList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
