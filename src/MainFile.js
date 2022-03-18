import React from 'react';
import DisplayData from './DisplayData';
import data from './myData.json';

const MainFile = () => {
	return (
		<div>
			<div className='row'>
				{data.map((dat, key) => (
					<DisplayData key={key} id={dat.id} title={dat.title} desc={dat.description} imgm={dat.image}></DisplayData>
				))}
			</div>
		</div>
	);
};

export default MainFile;
