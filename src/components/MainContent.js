import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
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
				<button className="top-scored">
						Top Scored
				</button>
				<button className="top-airing">
						Top Airing
				</button>
				<button className="favourites">
				      Favourites⭐
				</button>
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