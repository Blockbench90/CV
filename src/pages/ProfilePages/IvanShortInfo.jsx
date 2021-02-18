import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import TelegramIcon from '@material-ui/icons/Telegram';
import {Phone} from "@material-ui/icons";
import Button from "../../utils/CustomButton/Button";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";

import profile from "../../assets/img/photo.jpg";

import styles from "./profilePagesStyle";

const useStyles = makeStyles(styles);

export default function IvanShortInfo() {
    const classes = useStyles();

    const imageClasses = classNames( classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid );

    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.profile}>
                                <div>
                                    <img src={profile} alt="..." className={imageClasses}/>
                                </div>
                                <h3 className={classes.title}>Литвиненко Иван</h3>
                                <h3>Front-End (Full Stack) Developer</h3>

                            </div>
                        </GridItem>
                    </GridContainer>

                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                            <p style={{fontWeight: 400, fontSize: "15px"}}>
                               Место жительства: <span style={{fontWeight: 600, fontSize: "17px"}}>Запорожье</span>
                            </p>
                            <p style={{fontWeight: 400, fontSize: "15px"}}>
                                Опыт работы: <span style={{fontWeight: 600, fontSize: "17px"}}>1.8 года</span>
                            </p>
                            <p style={{fontWeight: 400, fontSize: "15px"}}>
                                Телефон: <span style={{fontWeight: 600, fontSize: "17px"}}>096 423 75 50</span>
                            </p>
                            <p style={{fontWeight: 400, fontSize: "15px"}}>
                                Email: <span style={{fontWeight: 600, fontSize: "17px"}}>prog.hak.ak@gmail.com</span>
                            </p>
                        </GridItem>
                    </GridContainer>


                    <GridContainer className={classes.textCenter} justify="center">
                        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                            <div className={classes.name}>
                                <Button href="tel:+380964237550" className={classes.margin5} style={{ fontSize: '13px', padding: "12px 10px"}}>
                                    <Phone style={{marginRight: "10px"}}/> Позвонить
                                </Button>

                                <Button href="https://t.me/root_lil" className={classes.margin5} style={{ fontSize: '13px', padding: "12px 16px"}}>
                                    <TelegramIcon style={{marginRight: "10px"}}/> Telegram
                                </Button>
                            </div>
                        </GridItem>
                    </GridContainer>

                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}
