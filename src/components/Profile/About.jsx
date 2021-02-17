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
                    <h5 className={classes.titleParagraph}>Фуллстек разработчик, но специализируюсь больше по фронту.</h5>
                </div>

            </div>
        </div>
    );
}
