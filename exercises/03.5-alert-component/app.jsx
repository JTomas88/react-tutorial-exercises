import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * Here you have to declare your Alert component and return
 * the html that bootstrap dictates for its alert component
 */
const Alert = (props) => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	text: PropTypes.string,
};

ReactDOM.render(<Alert text="OMG! Something really bad has happened!" />, document.querySelector("#myDiv"));
