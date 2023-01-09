import React from "react";
import Cards from "./Cards.jsx";

//create your first component
const SecondsCounter = (props) => {
    return (
    <>
      <h1>Contador: {props.numero1}</h1>
      <Cards/>
    </>
    );
};

export default SecondsCounter;












