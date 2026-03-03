
const Navbar = ({ setSearchState, query, setQuery }) => {

  return (
    <div className="bg-gray-800 font-serif flex flex-col items-center justify-center pt-20 pb-10 gap-10">
        <h2 className="text-5xl font-semibold text-white">Movie App</h2>
        <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 bg-white/95">
            <input 
                type="text" 
                placeholder="Search movie here ... "
                className="text-black/90 text-lg border-none outline-none px-2 max-w-xl min-w-sm" 
                value={query}
                onChange={(e) => { 
                    setQuery(e.target.value);
                    if (e.target.value === "") {
                        setSearchState(false);
                    }
                }}
            />
            <i onClick={() => query === '' ? setSearchState(false) : setSearchState(true)} className="fa-solid fa-magnifying-glass text-gray-700 text-2xl active:scale-102 duration-200"></i>
        </div>
    </div>
  )
}

export default Navbar