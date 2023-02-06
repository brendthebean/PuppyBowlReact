import react from "react";

const PlayerCard = ({index},{name}, {id}, {imageUrl}) => {
    return <>    
      <div key= {index} class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{name}</p>
          <p class="pup-number">{id}</p>
        </div>
        <img src= {imageUrl} alt= "photo of {props.name} the puppy"/>
      </div>
    </>
}

export default PlayerCard;