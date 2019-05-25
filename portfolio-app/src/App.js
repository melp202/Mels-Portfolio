import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
	render() {
		return (
			<div>
				<div style={{ height: '300px', position: 'relative' }}>
					<Layout
						style={{
							background:
								'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'
						}}
					>
						<Header transparent title="Melissa Price" style={{ color: 'white' }}>
							<Navigation>
								<a href="#">About</a>
								<a href="#">Projects</a>
								<a href="#">Contact</a>
							</Navigation>
						</Header>
						<Content />
					</Layout>
				</div>
        <About />
        <Projects />
			</div>
		);
	}
}

export default App;
