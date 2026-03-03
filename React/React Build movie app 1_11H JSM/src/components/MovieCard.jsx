
const MovieCard = ({ title, url, releaseDate }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white/90 hover:scale-105 transition-all duration-400">
        <img src={url} alt={title} width={200} />
        <div className="p-4">
            <h2 className="font-bold text-lg text-black/95 max-w-40">{title}</h2>
            <p className="text-black/80 text-sm">{releaseDate}</p>
        </div>
    </div>
  )
}

export default MovieCard