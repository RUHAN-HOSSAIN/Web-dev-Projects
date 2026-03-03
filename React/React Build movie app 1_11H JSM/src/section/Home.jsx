import { useState } from "react";

import Navbar from "../components/Navbar";
import Body from "../components/Body";

const Home = () => {
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState(false);

  return (
    <div>
      <Navbar setSearchState={setSearchState} query={query} setQuery={setQuery} />
      <Body query={query} searchState={searchState} />
    </div>
  )
}

export default Home