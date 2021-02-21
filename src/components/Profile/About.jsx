import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function About() {
    const classes = useStyles();
    const text = classNames( classes.title, classes.textCenter);
    return (

        <div className={classes.section}>
            <div className={classes.container}>

                <h3 className={text}>Обо мне</h3>
                <div>
                    <h5 className={classes.titleParagraph}>Фуллстек разработчик, но большую часть времени уделяю фронтенду.</h5>
                    <p className={classes.titleParagraph} style={{fontSize: '19px'}}> Перечень скилов с примерами будет ниже,
                        а от себя добавлю. Не рассматриваю удаленную или разовую работу. Ищу
                        работу в команде, со строгим, но справедливым ревьювером и понятливым тимлидом, который способен
                        поддерживать желание расти и развиваться.
                        В приоритете такая-вот "команда мечты".🤔😁</p>
                </div>

            </div>
        </div>
    );
}
