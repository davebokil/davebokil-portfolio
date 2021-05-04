import React from "react"
import './index.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo';
// import { StaticQuery, graphql } from 'gatsby'

export default function Home() {
    return <main>	
		  <GatsbySeo
		      title='Dave Bokil - Web Developer'
		      description='Dave Bokil is a powerful full stack javascript developer with the innate gift of spotting potential optimizations in UX design and implementing improvements at a rapid pace.'
		    />
			<div class="frame">
				<div class="frame__links">
					<a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer">LinkedIn</a>
					<a href="https://github.com/davebokil" target="_blank" rel="noreferrer">GitHub</a>
					<a href="mailto:bokild@gmail.com">Contact</a>
				</div>
			</div>
			<div class="content">
				<h2 class="content__title"><span>Dave Bokil</span><em>Web Developer</em></h2>
			</div>
		</main>
}