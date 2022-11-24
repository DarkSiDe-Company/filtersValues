import React, { useState } from "react";
import Question from "../../components/Question";

import styles from "../../styles/test.module.scss";
import { getTest } from "../api/hello";

export default function Test({ data }) {
    const [test, setTest] = useState(data);

    return (
        <div className={styles.container}>
            <div className={styles.title}>{test.title}</div>

            <Question questions={test.questions} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const titleId = context.query.num;
    const data = await getTest(titleId);
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
        },
    };
}
