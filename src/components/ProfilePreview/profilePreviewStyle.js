import { containerFluid } from "../../assets/jss/hackers-inside";

import imagesStyle from "../../assets/jss/imagesStyles";

const profilePreviewStyle = {
    section: {
        padding: "70px 0"
    },
    container: {
        ...containerFluid,
        textAlign: "start !important"
    },
    ...imagesStyle,
    link: {
        textDecoration: "none"
    }
};

export default profilePreviewStyle;
