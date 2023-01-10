import React from "react";
// include images into your bundle

// create your first component
const SecondsCounter = (props) => {
	return (
		<>
		<div className="container justify-content-center d-flex bg-black mt-2" style={{width: 600, heaht: 10}}>
			<div className="row">
				<div className="col fs-1 bg-white mt-3 mb-3">
				<i class="fa fa-clock"></i>
				</div>
				<div className="col">
				<p className="fs-1 text-white mt-3">{props.numero6}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white mt-3">{props.numero5}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white mt-3">{props.numero4}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white mt-3">{props.numero3}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white mt-3">{props.numero2}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white mt-3">{props.numero1}</p>
				</div>
			</div>
		</div>
		</>
	)
};

export default SecondsCounter;