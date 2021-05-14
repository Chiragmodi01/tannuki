import React from 'react'
import { useState } from 'react';

function AnimeCard({anime}) {

const [inHover, setHover] = useState(false);

	return (
		<article className="anime-card">
				<figure 
				    onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
							<button className="icon-favourite">
							   {inHover && <p>⭐</p>}
							</button>
							<a className="icon-linking"
								href={anime.url} 
								target="_blank" 
								rel="noreferrer">{inHover && <img className="img-linking" alt="svgLink" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDE5Ljk4MDQ2OSAyLjk5MDIzNDQgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDE5Ljg2OTE0MSAzIEwgMTUgMyBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMTUgNSBMIDE3LjU4NTkzOCA1IEwgOC4yOTI5Njg4IDE0LjI5Mjk2OSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgOS43MDcwMzEyIDE1LjcwNzAzMSBMIDE5IDYuNDE0MDYyNSBMIDE5IDkgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDIxIDkgTCAyMSA0LjEyNjk1MzEgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDE5Ljk4MDQ2OSAyLjk5MDIzNDQgeiBNIDUgMyBDIDMuOTA2OTM3MiAzIDMgMy45MDY5MzcyIDMgNSBMIDMgMTkgQyAzIDIwLjA5MzA2MyAzLjkwNjkzNzIgMjEgNSAyMSBMIDE5IDIxIEMgMjAuMDkzMDYzIDIxIDIxIDIwLjA5MzA2MyAyMSAxOSBMIDIxIDEzIEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAxOSAxMyBMIDE5IDE5IEwgNSAxOSBMIDUgNSBMIDExIDUgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDExIDMgTCA1IDMgeiI+PC9wYXRoPjwvc3ZnPg=="/>}
							</a>
					<div className="anime-info">
							<p className="title">{ anime.title }</p>
							<p className="score">{ anime.score }</p>
					</div>
				</figure>
		</article>
	)
}

export default AnimeCard