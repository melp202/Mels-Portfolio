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
						<div id='headshot'>

						</div>
					</Cell>
					<Cell col={4}>
						<div>
							<p>
							I am a Software Engineer with a passion for music and building web applications. I aim to use my development skills like music: touch and bring ease to users lives through complex, yet user- friendly interactions.
							</p>
							<p>
							In my leisure time I enjoy attending music driven events, working on personal projects and watching anime.
							</p>
							<button className='mdl-button mdl-js-button mdl-button--raised action-btn about-btn'>Projects <i class="fas fa-file-code"></i></button>
							<button className='mdl-button mdl-js-button mdl-button--raised action-btn about-btn'>Github <i class="fab fa-github"></i></button>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default About;
