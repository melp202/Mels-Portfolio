import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
	render() {
		return (
			<div>
				<Grid className="demo-grid-1">
					<Cell col={6}>
						<div style={{height: '300px', width: '300px', background: 'teal', borderRadius: '50%'}}>

						</div>
					</Cell>
					<Cell col={6}>
						<div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, itaque. Recusandae dignissimos, enim natus autem a suscipit aspernatur similique ipsum vero pariatur facilis id culpa.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, itaque. Recusandae dignissimos, enim natus autem a suscipit aspernatur similique ipsum vero pariatur facilis id culpa.
							</p>
							<button>Projects</button>
							<button>Github</button>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default About;
