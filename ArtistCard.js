const ArtistCard = ({obj}) => {

  return (
    <div className="artist-card">
      {obj.name}
      <img src={obj.images[0].url}></img>
      Genre: {obj.genres[0]}
    </div>
  )
}

export default ArtistCard;