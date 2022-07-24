import React from "react";
import ReactDOM from "react-dom";

function Product() {
	return (
		<div className="col-3 mx-auto mt-5 rounded border">
			<img
				src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
				alt="Wrong Image!"
				className="img-fluid w-100"
			/>
			<div className="col-12 p-3">
				<h5>Tesla Model S</h5>
				<p>Range (EPA est.): 396 mi</p>
				<p>0-60 mph: 1.99s</p>
				<p>Top Speed: 200 mph</p>
				<p>Peak Power: 1,020 hp</p>
				<a href="https://www.tesla.com/models/design#overview" className="w-100 btn btn-dark" target="_blank">
					Order now
				</a>
			</div>
		</div>
	);
}

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Card />
ReactDOM.render(<Product />, myDiv);