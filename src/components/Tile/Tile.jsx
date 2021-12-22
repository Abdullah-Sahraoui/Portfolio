import './tile.css';

const Tile = ( {src, title} ) => {
  const url = "url('" + src + "')"
  
  return (
    <div
      className="tile-container flex flex-col items-start justify-end rounded-3xl text-black text-lg"
      style={{backgroundImage: url}}
    >
      <p className="tile-title text-xl p-2">{title}</p>
    </div>
  )
}

export default Tile;