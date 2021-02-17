import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Fab from '@material-ui/core/Fab'
import Toolbar from '@material-ui/core/Toolbar'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Zoom from '@material-ui/core/Zoom'
import Tooltip from "@material-ui/core/Tooltip";

//Кнопка скролинга
//чтобы работала, нужно обернуть ею целый компонент
const useScrollButtonStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3.8),
    },
    //отключает стандартный размер в комбинации с variant={'dense'}
    toolbar: {
        minHeight: '1px'
    },
    tooltip: {
        padding: "10px 15px",
        minWidth: "130px",
        color: "#555555",
        lineHeight: "1.7em",
        background: "#FFFFFF",
        border: "none",
        borderRadius: "3px",
        boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
    }
}))

function ScrollTop(props) {
    const {children, window} = props
    const classes = useScrollButtonStyles()
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = ((event.target ).ownerDocument || document).querySelector('#back-to-top-anchor')

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

export default function ScrollButton(props) {
    const classes = useScrollButtonStyles()
    return (
        <React.Fragment>
            <Toolbar id="back-to-top-anchor" variant='dense' className={classes.toolbar}/>
            {props.children}
            <ScrollTop {...props}>
                <Tooltip id="back-to-home" title="Вверх" placement="left" classes={{ tooltip: classes.tooltip }}>
                <Fab color="primary" size="medium" variant="extended" aria-label="scroll back to top">
                    <ArrowUpwardIcon/>
                </Fab>
                </Tooltip>
            </ScrollTop>
        </React.Fragment>
    );
}
