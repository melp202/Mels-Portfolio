import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer class="mdl-mini-footer">
					<div class="mdl-mini-footer__middle-section">
						<div class="mdl-logo">Melissa Price</div>
						<ul class="mdl-mini-footer__link-list">
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Projects</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
