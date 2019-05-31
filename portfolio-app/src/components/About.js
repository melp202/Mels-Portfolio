import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css'


class About extends Component {
	render() {
		return (
			<div className='about-section'>
				<div className='about-heading'>
				<h1>About</h1>
				</div>
				<Grid className="demo-grid-1" style={{margin: '18px 0'}}>
					<Cell col={4}>
						<div style={{height: '350px', width: '350px', background: 'teal', borderRadius: '50%'}}>

						</div>
					</Cell>
					<Cell col={4}>
						<div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, itaque. Recusandae dignissimos, enim natus autem a suscipit aspernatur similique ipsum vero pariatur facilis id culpa.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, itaque. Recusandae dignissimos, enim natus autem a suscipit aspernatur similique ipsum vero pariatur facilis id culpa.
							</p>
							<button className='mdl-button mdl-js-button mdl-button--raised action-btn about-btn'>Projects</button>
							<button className='mdl-button mdl-js-button mdl-button--raised action-btn about-btn'>Github</button>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default About;
