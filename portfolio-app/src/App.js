import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
	render() {
		return (
			<div>
				<div style={{ height: '400px', position: 'relative', backgroundColor: '#333'}}>
					<Layout 
						style={{
							background:
								'url(https://images.unsplash.com/photo-1519576558007-128b5f56caeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80) center / cover', opacity: '.7'
						}}
					>
						<Header
							transparent
							title="Melissa Price"
							style={{ color: 'white' }}
						>
							<Navigation className='fScreen-Nav'>
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
						<Content />
					</Layout>
				</div>
				<About />
				<Projects />
        <Contact/>
			</div>
		);
	}
}

export default App;
