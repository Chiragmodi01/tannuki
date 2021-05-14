import React from 'react'

function TopAiring({anime}) {

    function clickHandler() {
        console.log("Top Airing")
    }

	return (
        <button className="top-airing" onClick={clickHandler} >
        Top Airing
        </button>
	)
}

export default TopAiring