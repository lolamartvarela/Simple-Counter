//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
let num1 = 0;
setInterval(function() {
    num1++;

    //render your react application
    ReactDOM.render( <
        SecondsCounter numero1 = {
            num1
        }
        />,
        document.querySelector("#app")
    );
}, 1000);