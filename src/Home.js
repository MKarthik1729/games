import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
    hello
    <Link to="/abhi">Abhi</Link>
    <Link to="/karthik">Karthik</Link>
        </div>
  )
}

export default Home