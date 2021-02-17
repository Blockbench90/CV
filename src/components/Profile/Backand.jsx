import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Backand() {
    const classes = useStyles();
    const text = classNames( classes.title, classes.textCenter);
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <h3 className={text}>Backend:</h3>
                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— NodeJs, Express.</p>
                </div>

                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— MongoDB, Mongoose, JWT.</p>
                </div>
                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— Cloudinary, Multer, Nodemailer, Passport, Cloudinary, Concurrently...</p>
                </div>
                <div style={{paddingLeft: "15px"}}>
                    <p className={classes.titleParagraph}>— WebSocket, Socket.io.</p>
                </div>
            </div>
        </div>
    );
}
