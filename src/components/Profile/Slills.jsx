import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Skills() {
    const classes = useStyles();
    const text = classNames(classes.title, classes.textCenter);
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <h3 className={text}>Skills:</h3>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— Git, GitHub, GitLab</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— BEM.</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— MySQL.</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— JSON.</p>
                </div>
            </div>
        </div>
    );
}
