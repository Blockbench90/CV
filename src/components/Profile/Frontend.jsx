import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Frontend() {
    const classes = useStyles();
    const text = classNames(classes.title, classes.textCenter);
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <h3 className={text}>Frontend:</h3>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— Javascript, TypeScript.</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— React, Immer, Axios, Classnames, Date-fns, React-hook-form ...</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— Redux, Redux Thunk, Redux Saga, Reselect ...</p>
                </div>
                <div style={{paddingLeft: "15px"}}>
                <p className={classes.titleParagraph}>— CSS, LESS, SASS, Styled-components ...</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— Material-ui, Ant Design ...</p>
                </div>

            </div>
        </div>
    );
}
