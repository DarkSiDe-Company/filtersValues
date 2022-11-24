import React, { useState } from "react";
import CheckBox from "./checkBox";

import styles from "../styles/qusetion.module.scss";

export default function Question(props) {
    const [currentQuestion, setCurrentQuestion] = useState(
        props.questions[0].id
    );
    const [ans, setAns] = useState(false);

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
                        <CheckBox
                            checked={ans}
                            text={answer.answerText}
                            key={answer.answerId}
                            onClick={clickAnswer}
                        />
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
