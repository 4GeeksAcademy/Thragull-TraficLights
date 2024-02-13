import React from "react";

//include images into your bundle
import Trafic from "./Traffic";

//create your first component
const Home = () => {
	return (
		<div id="screen" className='position-relative'>
			<Trafic />
		</div>
	);
};

export default Home;
