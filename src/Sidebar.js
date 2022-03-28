import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import Tejas from './assets/1646824741057.jfif'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
const Sidebar = () => {
	const user = useSelector(selectUser);
	console.log(user,'user')
	const recentItem = (topic) => {
	return 	 <div className="sidebar__recentItem">
	<div className="sidebar__hash">#</div>
	<p>{topic}</p>
</div>
	}
  return (
	<div className='sidebar'>
		<div className="sidebar__top">
			<img src="http://source.unsplash.com/random" alt="" />
		    <Avatar src={user.photoUrl} className='sidebar__avatar' />
			<h2>{user.displayName}</h2>
			<h4>{user.email}</h4>
		</div>

		<div className="sidebar__stats">
			<div className="sidebar__stat">
				<p>who viewed you</p>
				<p className='sidebar__statNumber'>101</p>
			</div>
			<div className="sidebar__stat">
				<p>views on post</p>
				<p className='sidebar__statNumber'>1012</p>
			</div>
		</div>

		  <div className="sidebar__buttons">
			  <p>Recent</p>
			   {recentItem('reactjs')}
			   {recentItem('programming')}
			   {recentItem('software engineering')}
			   {recentItem('design')}
			   {recentItem('develeoper')}
		  </div>
		
	</div>
	
  )
}

export default Sidebar