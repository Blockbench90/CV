import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./servicesStyle";

const useStyles = makeStyles(styles);

export default function ProfileSkills() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto asperiores consequatur
                    cumque earum eligendi facilis fuga laudantium minima nesciunt nulla provident quaerat qui quod,
                    repellat reprehenderit suscipit unde voluptate?
                </div>
                <div>Ab aperiam cumque deleniti enim est eum hic id nam, optio praesentium quisquam, quo repudiandae ut
                    veritatis vero. Accusamus dignissimos ea facere in iste magnam, nostrum reprehenderit sint sit ut?
                </div>
                <div>Alias amet at delectus dicta dolor dolorum est facere fuga illo illum incidunt ipsa, ipsum iure,
                    quae quam, rem rerum saepe sint ullam velit? Dicta ipsa numquam pariatur possimus voluptas.
                </div>
                <div>Deserunt distinctio earum ex impedit non optio praesentium provident soluta ullam voluptatibus. Ab,
                    doloremque enim. Adipisci aperiam aspernatur consequatur corporis earum, enim expedita laudantium
                    molestiae, officia perferendis quisquam rem sequi?
                </div>
                <div>Ab animi architecto asperiores consequatur cumque dignissimos, doloremque eveniet, ex fugit in
                    iste, maxime modi molestias obcaecati quasi soluta tempora voluptatibus! Amet cum ea praesentium
                    quia sit tenetur vitae voluptates!
                </div>
                <div>Laboriosam maxime quae repellendus similique. Aperiam aspernatur at, blanditiis consequuntur
                    deleniti doloremque enim esse fuga laborum libero modi neque nobis nulla odit officia praesentium
                    quae reiciendis rem repellendus sed vero!
                </div>
                <div>Amet delectus doloremque itaque nesciunt quam quos sit. Ab, aperiam corporis cupiditate dicta,
                    dolorem eum illo inventore, nulla obcaecati quasi quo reiciendis unde vel? A atque expedita ipsa
                    iste necessitatibus!
                </div>
                <div>A corporis deleniti doloribus id illum impedit, ipsam maxime nam perspiciatis praesentium
                    reiciendis similique ullam veniam. Dolores earum ex facere, id, molestiae, natus nisi non officia
                    officiis quam quia sit?
                </div>

            </div>
        </div>
    );
}
