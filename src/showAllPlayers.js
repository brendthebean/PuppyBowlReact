import React from "react";
import fetchAllPlayers from "./fetchAllPlayers";
import PlayerCard from "./playerCard";


 

const ShowAllPlayers =  async () => {   
    const playerList  = await fetchAllPlayers();
    const formattedPlayers = [playerList.length];

    for(let i = 0; i < playerList.length; i++){
        formattedPlayers[i]= {
            name: playerList[i].name,
            id: playerList[i].id,
            imageUrl: playerList[i].imageUrl
        }
    }

    console.log(formattedPlayers);
    console.log(typeof formattedPlayers);

    return (
        <>
        <h1>god help me</h1>
        </>
    )
}

export default ShowAllPlayers;