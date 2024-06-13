import React from "react"
import './index.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Home() {
	const year = new Date()
	const description = 'Dave Bokil is an innovative Product Director who excels at driving vision and strategic growth. With an innate talent for identifying opportunities for optimization and a solid background in software engineering, Dave is adept at leading the transformation of concepts into high-impact realities.'
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
				<h3 className="content__title__em"><em>Product Development, Innovation, and Strategy</em></h3>
				<h3>{description}</h3>
				<h3>He is currently Director of Digital Product at the <a href="https://www.nbpa.com/" target="blank">National Basketball Player's Association</a></h3>
				<p>© {year.getFullYear()}</p>
			</div>
		</main>
}