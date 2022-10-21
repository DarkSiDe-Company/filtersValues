import Button from "../components/button";
import Radio from "../components/radio";
import CheckBox from "../components/checkBox";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <a href="">Ссылка без декора</a>
            <p>
                <h1>Кнопки</h1>
                <Button text="Активная кнопка" disable={false} />
                <Button text="Неактивная кнопка" disable={true} />
            </p>
            <p>
                <h1>Радио</h1>
                <Radio disabled={false} checked={false} />
                <Radio disabled={true} checked={false} />
                <Radio disabled={false} checked={true} />
            </p>
            <p>
                <h1>Чекбокс</h1>
                <CheckBox
                    disabled={false}
                    checked={false}
                    text={"Я какой-то текст"}
                />
                <CheckBox
                    disabled={true}
                    checked={false}
                    text={"Я не какой-то текст"}
                />
                <CheckBox
                    disabled={false}
                    checked={true}
                    text={"Я есть текст"}
                />
            </p>
        </div>
    );
}
