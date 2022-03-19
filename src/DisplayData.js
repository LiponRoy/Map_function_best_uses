import React from 'react';

const DisplayData = ({ id, title, desc, imgm, key }) => {
	// getting data using props
	return (
		<div key={key} className='col-md-3'>
			{/* using bootstrap card and display props value */}
			<div class='card'>
				<img class='card-img-top' src={imgm} alt='Card image cap' />
				<div class='card-body'>
					<div className='cardText'>
						<span className='card-id'>ID No: {id}</span>
						<span className='card-title'>{title}</span>
						<span className='card-desc'>{desc}</span>
					</div>
					<a href='#' class='card-btnMe'>
						CLICK ME
					</a>
				</div>
			</div>
		</div>
	);
};

export default DisplayData;
