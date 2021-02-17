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
                                <h3>Frontend Developer</h3>
                                <div className={classes.name}>

                                    <Button href="tel:+380964237550" className={classes.margin5} style={{ fontSize: '18px',}}>
                                        <Phone/> 096 423 75 50
                                    </Button>

                                    <Button href="https://t.me/root_lil" className={classes.margin5} style={{ fontSize: '18px',}}>
                                        <TelegramIcon/> Telegram
                                    </Button>
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div className={classes.description}>
                        <p>
                            Когда-то, давным давно, услышал фразу: "Найди работу по душе, и ты никогда в жизни не
                            будешь работать"!
                            И знаете что? Оказывается, я в пожизненном отпуске){" "}
                        </p>
                    </div>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                            <h6 style={{fontWeight: 400, fontSize: "15px"}}>
                                И да, не верьте словам, приходите и проверяйте, будем рады.
                            </h6>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
