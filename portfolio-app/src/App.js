import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						height: '100vh',
						position: 'relative',
						marginBottom: '-24px',
						backgroundColor: '#343'
					}}
				>
					<Layout
						style={{
							background:
								'url(https://images.unsplash.com/photo-1505867104426-a08b9a21aae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) center / cover',
							opacity: '.88'
						}}
					>
						<Header transparent title=" " style={{ color: 'white' }}>
							<Navigation className="fScreen-Nav">
								<a href="#">About</a>
								<a href="#">Projects</a>
								<a href="#">Contact</a>
							</Navigation>
						</Header>
						{/* <Drawer title="Title">
							<Navigation>
								<a href="#">Link</a>
								<a href="#">Link</a>
								<a href="#">Link</a>
								<a href="#">Link</a>
							</Navigation>
						</Drawer> */}
						<div className="highlight">
							<div className="highlight-heading">
								<h1>Melissa Price</h1>
							</div>
							<div className="highlight-subtexted">
								<p>
									Front-End Developer
									<span className="pipes"> | </span>
									Creator
									<span className="pipes"> | </span>
									Music Enthusiast{' '}
								</p>
							</div>
							<button className="mdl-button mdl-js-button mdl-button--raised action-btn view-projects">
								View Projects
							</button>
						</div>
						{/* <Content /> */}
					</Layout>
				</div>
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
