import React from "react"
import './index.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Home() {
  return <main>	
		  <GatsbySeo
		      title='Dave Bokil - Web Developer'
		      description='Welcome to the website of Dave Bokil. Full Stack Web Developer based in the New York City Metropolitan area.'
		    />
			<div class="frame">
				<div class="frame__links">
					<a href="https://www.linkedin.com/in/davebokil/" target="_blank">LinkedIn</a>
					<a href="https://github.com/davebokil" target="_blank">GitHub</a>
					<a href="mailto:bokild@gmail.com">Email Me</a>
				</div>
			</div>
			<div id="container" data-images='["/1.jpg","/2.jpg","/3.jpg"]'></div>
			<div class="content">
				<h2 class="content__title"><span>Dave Bokil</span><em>Web Developer</em></h2>
			</div>
		</main>
}
