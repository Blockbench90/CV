import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";

import styles from "./profilePreviewStyle";
import IvanShortInfo from "../../pages/ProfilePages/IvanShortInfo";
import About from "../Profile/About";
import Frontend from "../Profile/Frontend";
import Backand from "../Profile/Backand";
import Skills from "../Profile/Slills";
import Projects from "../Profile/Projects";

const useStyles = makeStyles(styles);

export default function ProfilePreviewSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <GridContainer justify="center">

                    <GridItem  md={3}>
                        <IvanShortInfo/>
                    </GridItem>

                    <GridItem md={9}>
                        <About/>
                        <Frontend/>
                        <Backand/>
                        <Skills/>
                        <Projects/>
                    </GridItem>

                </GridContainer>
            </div>
        </div>
    );
}
