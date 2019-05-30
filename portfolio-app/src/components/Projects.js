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
class Projects extends Component {
	render() {
		return (
			<div>
				<Grid className="demo-grid-1">
					<Cell col={3}>
						<Card
							shadow={0}
							style={{ width: '320px', height: '320px', margin: 'auto' }}
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
								<Button colored>View Updates</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={3}>
						<Card
							shadow={0}
							style={{ width: '320px', height: '320px', margin: 'auto' }}
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
								<Button colored>View Updates</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={3}>
						<Card
							shadow={0}
							style={{ width: '320px', height: '320px', margin: 'auto' }}
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
								<Button colored>View Updates</Button>
							</CardActions>
						</Card>
					</Cell>
					<Cell col={3}>
						<Card
							shadow={0}
							style={{ width: '320px', height: '320px', margin: 'auto' }}
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
								<Button colored>View Updates</Button>
							</CardActions>
						</Card>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
