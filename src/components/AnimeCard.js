import React from 'react'
import { useState } from 'react';

function AnimeCard({anime}) {

const [inHover, setHover] = useState(false);

	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure 
				    onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
							<button className="icon-favourite">
							   {inHover && <p>⭐</p>}
							</button>
					<div className="anime-info">
							<h3>{ anime.title }</h3>
							<h3>{ anime.score }</h3>
					</div>
				</figure>
			</a>
		</article>
	)
}

export default AnimeCard