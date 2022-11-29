import React from "react"
import './index.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Home() {
	const year = new Date()
    return <main>	
		  <GatsbySeo
		      title='Dave Bokil - Web Developer'
		      description='Dave Bokil is a powerful full stack javascript developer with the innate gift of spotting potential optimizations in UX design and implementing improvements at a rapid pace.'
		    />
			<div className="frame">
				<div className="frame__links">
					<a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer">LinkedIn</a>
					<a href="https://github.com/davebokil" target="_blank" rel="noreferrer">GitHub</a>
					<a href="mailto:bokild@gmail.com">Contact</a>
				</div>
			</div>
			<div className="content">
				<h2 className="content__title"><span>Dave Bokil</span><em>Web Developer</em></h2>
				<h3>Dave Bokil is a powerful Full Stack Javascript Developer with the innate gift of spotting potential optimizations in UX design and implementing solutions and improvements at a rapid pace.</h3>
				<h3>He is currently Senior Full Stack Developer at the <a href="https://www.nbpa.com/" target="blank">National Basketball Player's Association</a></h3>
				<p>© {year.getFullYear()}</p>
			</div>
		</main>
}