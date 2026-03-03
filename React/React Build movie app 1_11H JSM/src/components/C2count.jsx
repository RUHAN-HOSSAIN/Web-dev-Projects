import { useState, useEffect, use } from "react"

const C2count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('Count has been updated to: ' + count);
    console.log('Count has been updated to: ' + count);
  }, [count]);  // Jokhon e ai count state update hobe, tokhon e useEffect er vitorer function ta run hobe. Ar ai case e alert show korbe.

  return (
    <div className="bg-blue-100 py-10 w-screen flex flex-col items-center justify-center gap-10">
      <button onClick={() => setCount(count - 1)} className="bg-gray-500 text-white text-3xl font-bold px-20 py-1 rounded-lg">-</button>
      <h2 className="text-3xl font-bold">{count}</h2>
      <button onClick={() => setCount(count + 1)} className="bg-gray-500 text-white text-3xl font-bold px-20 py-1 rounded-lg">+</button>
    </div>
  )
}

export default C2count