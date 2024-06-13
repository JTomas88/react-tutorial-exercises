import React, { useState } from "react";
import ReactDOM from "react-dom";

const Alert = () => {
	const [showMessage, setShowMessage] = useState(false);

	const clickHandler = () => {
		setShowMessage(true);
	};

	return (
		<div>
			<button className="btn btn-success btn-lg" onClick={clickHandler}>
				Click Me
			</button>
			{showMessage && <div className="alert alert-success mt-3">I was clicked!</div>}
		</div>
	);
};

// You don't have to edit anything below
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
