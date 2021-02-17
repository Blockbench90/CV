import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import Parallax from "./components/Parallax/Parallax";
import Footer from "./components/Footer/Footer";
import ProfilePreviewSection from "./components/ProfilePreview/ProfilePreviewSection";

import styles from "./assets/jss/components";
import ScrollButton from "./utils/ScrollButton/ScrollButton";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    return (
        <div>
            <Parallax/>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>
                    <ProfilePreviewSection />
                </ScrollButton>
            </div>
            <Footer />
        </div>
    );
}
