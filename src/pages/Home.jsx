/* eslint-disable no-unused-vars */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from "../constant/urlConstant";
import { createUrl } from "../firebase/firebaseFunctions";

const Home = () => {
  const [longUrl, setLongUrl] = useState('')
  const generateShortUrl = () => {
    const url = BASE_URL + uuidv4().split("", 6).join("")
    return url
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      longUrl: longUrl,
      shortUrl: generateShortUrl(),
      visited: 0
    }
    const res = createUrl(data);
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-4 w-1/3">
        <form onSubmit={handleSubmit} action="" className="space-y-4">
          <div>
            <p>Enter Long URL</p>
            <input type="text" className="w-full text-black" onChange={e=>setLongUrl(e.target.value)} value={longUrl}/>
          </div>

          <button className="bg-green-600 p-2">Generate</button>
        </form>
      </div>
    </div>
  )
}

export default Home