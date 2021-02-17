import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Frontend() {
    const classes = useStyles();
    const text = classNames( classes.title, classes.textCenter);
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <h3 className={text}>Frontend:</h3>
                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>- Фуллстек разработчик, но специализируюсь больше по фронту.</p>
                    <p className={classes.titleParagraph}>- Фуллстек разработчик, но специализируюсь больше по фронту.</p>
                    <p className={classes.titleParagraph}>- Фуллстек разработчик, но специализируюсь больше по фронту.</p>

                </div>

            </div>
        </div>
    );
}
