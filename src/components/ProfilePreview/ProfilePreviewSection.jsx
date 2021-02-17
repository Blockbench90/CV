import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";

import styles from "./profilePreviewStyle";
import ProfileSkills from "../Profile/ProfileSkills";
import IvanShortInfo from "../../pages/ProfilePages/IvanShortInfo";
import About from "../Profile/About";
import Frontend from "../Profile/Frontend";

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

                    <GridItem xs={12} sm={12} md={9}>
                        <About/>
                        <Frontend/>
                        <ProfileSkills/>
                        <ProfileSkills/>
                        <ProfileSkills/>
                        <ProfileSkills/>
                        <ProfileSkills/>
                        <ProfileSkills/>
                    </GridItem>

                </GridContainer>
            </div>
        </div>
    );
}
