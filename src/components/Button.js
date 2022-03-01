import React from "react";
import "./Button.css";

function Button({title, disableButton}) {
    return (
        <button disabled={disableButton}
                onClick={() => console.log(title)}>
            {title}
        </button>
    )
}

export default Button;