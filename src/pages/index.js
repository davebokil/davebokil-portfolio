import React from "react"
import './index.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Home() {
	const year = new Date()
	const description = 'Dave Bokil is a dynamic Product Director with a knack for transforming concepts into impactful realities. With a background in software engineering and a keen eye for optimization, Dave excels at creating digital products that drive growth and innovation.'
    return <main>	
		  <GatsbySeo
		      title='Dave Bokil - Technical Product Growth, Innovation, and Strategy '
		    //   description='Dave Bokil is a powerful full stack javascript developer with the innate gift of spotting potential optimizations in UX design and implementing improvements at a rapid pace.'
			description={description}
		    />
			<div className="frame">
				<div className="frame__links">
					<a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer">LinkedIn</a>
					<a href="https://github.com/davebokil" target="_blank" rel="noreferrer">GitHub</a>
					<a href="mailto:bokild@gmail.com">Contact</a>
				</div>
			</div>
			<div className="content">
				<h2 className="content__title"><span>Dave Bokil</span></h2>
				<h3 className="content__title__em"><em>Product Development & Innovation</em></h3>
				<h3>{description}</h3>
				<h3>He is currently Director of Product at the <a href="https://www.nbpa.com/" target="blank">National Basketball Player's Association</a></h3>
				
			</div>
		</main>
}