import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const planetsInHTML = planets.map((planeta, index) => {
	return (
		<li key={index} className="list-group-item">
			{planeta}
		</li>
	);
});

console.log(planetsInHTML);

// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

<ul class="list-group m-5">
	<li class="list-group-item">An item</li>
	<li class="list-group-item">A second item</li>
	<li class="list-group-item">A third item</li>
	<li class="list-group-item">A fourth item</li>
	<li class="list-group-item">And a fifth one</li>
</ul>;
