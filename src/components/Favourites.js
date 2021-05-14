import React from 'react'

function Favourites({anime}) {

    function clickHandler() {
        console.log("Favourites")
    }

	return (
        <button className="favourites" onClick={clickHandler} >
        Favourites⭐
</button>
	)
}

export default Favourites