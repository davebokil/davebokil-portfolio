import React from "react"
import './index.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo';
// import { StaticQuery, graphql } from 'gatsby'

export default function Contact() {
    return <main>	
		  <GatsbySeo
		      title='Dave Bokil - Web Developer'
		      description='Dave Bokil is a powerful full stack javascript developer with the innate gift of spotting potential optimizations in UX design and implementing improvements at a rapid pace.'
		    />
			<div class="frame">
				<div class="frame__links">
					<a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer">LinkedIn</a>
					<a href="https://github.com/davebokil" target="_blank" rel="noreferrer">GitHub</a>
					<a href="/contact">Contact</a>
				</div>
			</div>
			<div class="content">
				<form name="contact" method="POST" data-netlify="true">
				  <p>
				    <label>Your Name: <input type="text" name="name" /></label>   
				  </p>
				  <p>
				    <label>Your Email: <input type="email" name="email" /></label>
				  </p>
				  <p>
				    <label>Message: <textarea name="message"></textarea></label>
				  </p>
				  <p>
				    <button type="submit">Send</button>
				  </p>
				</form>
			</div>
		</main>
}