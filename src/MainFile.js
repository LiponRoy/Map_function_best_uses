import React from 'react';
import DisplayData from './DisplayData';
import data from './myData.json';

const MainFile = () => {
	return (
		<div>
			<div className='row'>
				{/* use Map function for data */}
				{data.map((dat, key) => (
					// pass data to DisplayData component
					<DisplayData key={key} id={dat.id} title={dat.title} desc={dat.description} imgm={dat.image}></DisplayData>
				))}
			</div>
		</div>
	);
};

export default MainFile;
