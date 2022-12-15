import React, { useState } from "react";

import styles from "../styles/qusetion.module.scss";

let arrayAnswers = [];

export default function Question(props) {
    const [checked, setChecked] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(
        props.questions[0].id
    );
    const [ans, setAns] = useState(false);

    function changeChecked() {
        setChecked(event.target.id);
        console.log(event.target.id === checked);
    }

    function nextQuestion() {
        if (currentQuestion < props.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function lateQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function clickAnswer() {
        setAns(!ans);
        console.log("text");
    }
    return (
        <>
            <div
                key={props.questions[currentQuestion].id}
                className={styles.container}
            >
                <h1>
                    Номер вопроса: {props.questions[currentQuestion].id + 1}
                </h1>
                <div className={styles.questionText}>
                    {props.questions[currentQuestion].questionText}
                </div>
                <form className={styles.answers}>
                    {props.questions[currentQuestion].answers.map((answer) => (
                        <div key={answer.answerId}>
                            <input
                                type="radio"
                                value={answer.answerText}
                                id={answer.answerId}
                                checked={checked === answer.answerId}
                                onChange={changeChecked}
                            ></input>
                            <label>{answer.answerText}</label>
                        </div>
                    ))}
                </form>
                <div className={styles.buttons}>
                    <div onClick={lateQuestion}>Предыдущий вопрос</div>
                    <div onClick={nextQuestion}>Следующий вопрос</div>
                </div>
            </div>
        </>
    );
}

{
    /* <CheckBox
                            checked={ans}
                            text={answer.answerText}
                            key={answer.answerId}
                            onClick={clickAnswer}
                        /> */
}
