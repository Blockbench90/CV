import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";
import classNames from "classnames";
import GitHubIcon from '@material-ui/icons/GitHub';
import TheatersIcon from '@material-ui/icons/Theaters';
import Button from "../../utils/CustomButton/Button";

const useStyles = makeStyles(styles);

export default function Projects() {
    const classes = useStyles();
    const text = classNames(classes.title, classes.textCenter);
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <h3 className={text}>Projects:</h3>
                <div style={{paddingLeft: "15px"}}>
                <h5>Несколько проектов, которые веду в свободное время</h5>
                    <div >
                        <div>
                            <h5 className={classes.projectName}>Story</h5>
                            <span className={classes.descriptionAPP}> Проект задуман как альтернатива старому и скучному Проза.ру.</span>
                        </div>
                        <div className={classes.projectButton}>
                            <div>
                                <Button href="https://github.com/Blockbench90/StoryApp" color='github' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <GitHubIcon/><span>Превью</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5 className={classes.projectName}>ShopTemplate</h5>
                            <span className={classes.descriptionAPP}>Шаблон для старта разработки интернет - магазина.</span>
                        </div>
                        <div className={classes.projectButton}>
                            <div>
                                <Button href="https://exempleshop.herokuapp.com" color='success' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <TheatersIcon/>DEMO
                                </Button>
                            </div>
                            <div>
                                <Button href="https://github.com/Blockbench90/ShopModel" color='github' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <GitHubIcon/><span>Исходники</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5 className={classes.projectName}>hi.zp.ua</h5>
                            <span className={classes.descriptionAPP}>Простенький сайт.</span>
                        </div>
                        <div className={classes.projectButton}>
                            <div>
                                <Button href="https://hi.zp.ua/" color='success' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <TheatersIcon/>DEMO
                                </Button>
                            </div>
                            <div>
                                <Button href="https://github.com/Blockbench90/hi.zp.ua" color='github' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <GitHubIcon/><span>Исходники</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div style={{paddingBottom: "100px"}}>
                        <div>
                            <h5 className={classes.projectName}>FamilyGame</h5>
                            <span className={classes.descriptionAPP}>Игрушка для племянника</span>
                        </div>
                        <div className={classes.projectButton}>
                            <div>
                                <Button href="https://family-three.vercel.app" color='success' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <TheatersIcon/>DEMO
                                </Button>
                            </div>
                            <div>
                                <Button href="https://github.com/Blockbench90/family" color='github' className={classes.margin5} style={{ fontSize: '18px',}}>
                                    <GitHubIcon/><span>Исходники</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
