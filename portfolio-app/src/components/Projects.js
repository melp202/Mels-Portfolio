import React, { Component } from 'react';
import {
	Card,
	CardTitle,
	CardText,
	CardActions,
	Button,
	Grid,
	Cell
} from 'react-mdl';
import '../css/Projects.css'
class Projects extends Component {
	render() {
		return (
			<div className='projects-section' id='projects'>
				<div className="projects-heading">
				<h1>Projects</h1>
				</div>
				<Grid className="demo-grid-1 project-card" style={{margin: '18px 0'}}>
					<Cell col={2} style={{margin: '30px'}}>
						<Card
							shadow={0}
							style={{ width: '240px', height: '320px', margin: 'auto' }}
						>
							<CardTitle
								expand
								style={{
									color: '#fff',
									background:
										'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
								}}
							>
								Who's That Artist
							</CardTitle>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
								convallis.
							</CardText>
							<CardActions border>
								<Button colored>View Site</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={2} style={{margin: '30px'}}>
						<Card
							shadow={0}
							style={{ width: '240px', height: '320px', margin: 'auto' }}
						>
							<CardTitle
								expand
								style={{
									color: '#fff',
									background:
										'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
								}}
							>
								Kicks-Api
							</CardTitle>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
								convallis.
							</CardText>
							<CardActions border>
								<Button colored>View Site</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={2} style={{margin: '30px'}}>
						<Card
							shadow={0}
							style={{ width: '240px', height: '320px', margin: 'auto' }}
						>
							<CardTitle
								expand
								style={{
									color: '#fff',
									background:
										'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
								}}
							>
								Dropz
							</CardTitle>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
								convallis.
							</CardText>
							<CardActions border>
								<Button colored>View Site</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={2} style={{margin: '30px'}}>
						<Card
							shadow={0}
							style={{ width: '240px', height: '320px', margin: 'auto' }}
						>
							<CardTitle
								expand
								style={{
									color: '#fff',
									background:
										'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
								}}
							>
								Update
							</CardTitle>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
								convallis.
							</CardText>
							<CardActions border>
								<Button colored>View Site</Button>
							</CardActions>
						</Card>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
