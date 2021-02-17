import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;

    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    })

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>

            </div>
        </footer>
    );
}
