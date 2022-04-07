import React from "react"
import './index.css'
import { Link } from "gatsby"

export default function Home() {
    return <main>
        <div className="content">
            <h2 className="content__title"><em>404 - Page Not Found</em></h2>
            <p>Return <Link to="/">Home</Link></p>
        </div>
    </main>
}