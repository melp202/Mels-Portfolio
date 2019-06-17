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
import '../css/Projects.css';
class Projects extends Component {
	render() {
		return (
			<div className="projects-section" id="projects">
				<div className="projects-heading">
					<h1>Projects</h1>
				</div>
				<Grid className="demo-grid-1 project-card" style={{ margin: '18px 0' }}>
					<Cell col={2} style={{ margin: '30px' }}>
						<Card
							shadow={0}
							style={{ width: '240px', height: '320px', margin: 'auto' }}
						>
							<CardTitle
								expand
								style={{
									color: '#fff',
									background:
										'url(`/src/images/WhosThatArtist.png`) bottom right 15% no-repeat #46B6AC'
								}}
							>
								Who's That Artist?
							</CardTitle>
							<CardText>
								Artist guessing game using browser audio, HTML, CSS and
								Javascript.
							</CardText>
							<CardActions border>
								<Button colored>
									<a href="https://melp202.github.io/WhosThatArtist/Game/">
										View Site
									</a>
								</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={2} style={{ margin: '30px' }}>
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
								MERN stack applications that collects data on sneaker releases.
							</CardText>
							<CardActions border>
								<Button colored>
									<a href="https://kicks-api.herokuapp.com/api/brands">
										View Site
									</a>
								</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={2} style={{ margin: '30px' }}>
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
								Application for users to collect data on their favorite fashion
								brands.
							</CardText>
							<CardActions border>
								<Button colored>
									<a href="http://best-spy.surge.sh/">View Site</a>
								</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={2} style={{ margin: '30px' }}>
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
								Miltransition
							</CardTitle>
							<CardText>
								Military veteran transition resources center to smoothen the
								transition process.
							</CardText>
							<CardActions border>
								<Button colored>
									<a href="http://stimulating-trucks.surge.sh/">View Site</a>
								</Button>
							</CardActions>
						</Card>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
