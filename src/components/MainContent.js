import React from 'react'
import AnimeCard from './AnimeCard';
import TopScored from './TopScored';
import TopAiring from './TopAiring';
import Favourites from './Favourites';
import { useState } from 'react';

function MainContent(props) {

	const [onClick, setOnClick] = useState(true);

	return (
		<main>
			<div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
				<TopScored />
				<TopAiring />
				<Favourites />
			</div>

			<div className="Home-poster">
          {onClick && <img className="luffy-png" src="/luffy-png.png" alt="luffy-png"/>}
        </div>

			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
		</main>
	)
}

export default MainContent