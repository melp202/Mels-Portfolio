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
				<div style={{ height: '600px', position: 'relative', backgroundColor: '#333', marginBottom: '-24px'}}>
					<Layout 
						style={{
							background:
								'url(https://media-public.canva.com/MADaq6iunOg/1/screen_2x.jpg) center / cover', opacity: '.8'
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
