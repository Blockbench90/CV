import { container } from "../../assets/jss/hackers-inside";

const servicesStyle = {
    section: {
        background: "#EEEEEE",
        marginBottom: "50px"
    },
    container,
    textCenter: {
        textAlign: "left"
    },
    title: {
        color: "#3C4858",
        margin: "1.75rem 0 0.875rem",
        textDecoration: "none",
        fontWeight: "700",
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px"
    },
    titleParagraph: {
        fontSize: '22px',
        margin: "0.75rem 0 0.875rem",
        textDecoration: "none",
        display: "inline-block",
        position: "relative",
        lineHeight: '30px',
        minHeight: "32px",
        fontWeight: 500
    },
    projectButton: {
        display: 'flex',
        justifyContent: 'start'
    },
    projectName: {
        color: "black",
        fontWeight: "700",
        minHeight: "32px",
        fontSize: "40px"
    },
    descriptionAPP: {
        fontSize: '22px',
        display: "inline-block",
        lineHeight: '30px',
        minHeight: "32px"
    },
};

export default servicesStyle;
