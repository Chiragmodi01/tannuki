import React from 'react'

function TopScored({anime}) {

    function clickHandler() {
        console.log("Top Scored")
    }

	return (
        <button className="top-scored" onClick={clickHandler} >
        Top Scored
</button>
	)
}

export default TopScored