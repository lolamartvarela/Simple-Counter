import React from "react";
import Cards from "./Cards.jsx";
//include images into your bundle

//create your first component
const SecondsCounter = (props) => {
	return (
<> 
<Cards/>
<div>
				<h1>Contador: {props.numero6}{props.numero5}{props.numero4}{props.numero3}{props.numero2}{props.numero1} </h1>
			</div>

</>
	);
};

export default SecondsCounter;











