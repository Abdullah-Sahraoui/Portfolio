import './tile.css';

const Tile = ( {src, title} ) => {
  const url = "url('" + src + "')";
  const classes = "tile-container transform-none hover:scale-105 transition-all md:transform flex flex-col items-start justify-end rounded-3xl text-black text-lg ";
  
  return (
    <div className={classes} style={{backgroundImage: url}}>
      <p className="tile-title text-xl p-2 text-white font-bold"><a href="#">{title}</a></p>
    </div>
  )
}

export default Tile;