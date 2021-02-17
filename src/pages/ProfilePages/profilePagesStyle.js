import { container } from "../../assets/jss/hackers-inside";

import imagesStyle from "../../assets/jss/imagesStyles";

const profilePageStyle = {
    container,
    profile: {
        marginTop: '30px',
        textAlign: "center",
        "& img": {
            maxWidth: "240px",
            width: "100%",
            margin: "0 auto",
        }
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    },
    name: {
        display: 'flax',
        justContent: 'space-between',
        marginTop: "20px"
    },
    ...imagesStyle,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        // position: 'fixed',
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
        color: "#3C4858",
        margin: "1.75rem 0 0.875rem",
        textDecoration: "none",
        fontWeight: "500",
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        lineHeight: '17px'
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    navWrapper: {
        margin: "20px auto 50px auto",
        overflowX: "hidden"
    }
};

export default profilePageStyle;
