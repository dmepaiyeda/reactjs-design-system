import React from "react";
// The HOC we wrap our components in to apply styles
import injectSheet from "react-jss";

//CSS file in JS object 
const styles = theme => ({
      // All top level object keys are different class names
    myButton: {
        // Global style 
        color: theme.text.color,
        margin: {
            //jss-expand gives more readable syntax
            top: 5, //jss-default-unit makes this 5px
            right: 0, 
            bottom: 0,
            left: "1rem"
        },

        "& span":{
            fontWeight: "bold"
        }
    },
    myLabel: {
        fontStyle: "italic"
    }
});

const Button = ({classes, children}) => (
    <button className={classes.myButton}>
        <span className={classes.myLabel}>{children}</span>
    </button>
);

export default injectSheet(styles)(Button)