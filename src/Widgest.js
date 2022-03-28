import React from 'react'
import './Widgest.css'
import {Info, FiberManualRecord} from '@material-ui/icons'

const Widgest = () => {
	const newsArticle = (heading, subtitle) => {
	 return(
		<div className="widgest__article">
		<div className="widgest__articlesLeft">
		  <FiberManualRecord />
		</div>
		<div className="widgest__articlesRight">
			<h4>{heading}</h4>
			<p>{subtitle}</p>
		</div>
	</div>
	 )
	}
  return (
	<div className='widgest'>
		 <div className="widgest__header">
		     <h2>Linkedin Clone</h2>
              <Info />
		 </div>
		  {newsArticle("Papa React is Back", "Top news - 9899 readers")}
		  {newsArticle("Russia Vs Ukraine", "Russia Throws New Missile Towards Ukraine")}
		  {newsArticle("Tesla hits new highs", "Cars & Auth - 300 readers")}
		  {newsArticle("Bitcon Breaks $22k", "Crypto - 8800 readers")}
		  {newsArticle("Is Redux Too Good", "Code - 989 readers")}
		  {newsArticle("I Created Linkedin Clone", "React Firebase Redux - 99 readers")}
	</div>
  )
}

export default Widgest