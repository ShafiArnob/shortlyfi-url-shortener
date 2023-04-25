/* eslint-disable no-unused-vars */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from "../constant/urlConstant";
import { createUrl, getUrl } from "../firebase/firebaseFunctions";

const Home = () => {
  const [longUrl, setLongUrl] = useState('')
  const [alias, setAlias] = useState('')
  const [urlExists, setUrlExists] = useState(false)

  const generateShortUrl = () => {
    const url = BASE_URL + uuidv4().split("", 6).join("")
    return url
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = {
      longUrl: longUrl,
      shortUrl: generateShortUrl(),
      visited: 0
    }
    const checkUrlExists = await getUrl(data.shortUrl)
    // console.log(checkUrlExists);
    if(Object.keys(checkUrlExists).length > 0){
      setUrlExists(true)
    }
    else{
      const res = await createUrl(data);

    }
  }

  return (
    <div className="h-[100vh]  flex flex-col justify-center items-center">
      {/* form container */}
      <div className="bg-[#1b1c30] p-8 w-1/3 rounded-2xl z-20 opacity-85 border-t-2 border-l-2 border-[#7b54e9] border-opacity-30">
        <form onSubmit={handleSubmit} action="" className="flex flex-col space-y-4">
          <h1 className="text-3xl text-[#ad8fff] font-bold pb-3">Shortlyfi</h1>    
          <div className="p-2 py-4 rounded-2xl bg-[#252740] ">
            {/* <p>Enter Long URL</p> */}
            <input type="text" className="mx-2 w-full focus:outline-none  text-gray-300 bg-[#252740] " placeholder="Enter Long URL" onChange={e=>setLongUrl(e.target.value)} value={longUrl}/>
          </div>

          <div className="p-2  py-4 rounded-2xl bg-[#252740]">
            {/* <p>Enter Long URL</p> */}
            <input type="text" className="mx-2 w-full focus:outline-none text-gray-300 bg-[#252740]" placeholder="alias (optional)" onChange={e=>setAlias(e.target.value)} value={alias}/>
          </div>

          <button className=" p-2 rounded-2xl py-3 bg-[#7b54e9] hover:bg-[#6143b6]">Generate</button>
        </form>
      </div>

          {
            urlExists && (
              <span className="w-1/3 p-6 my-5 bg-red-600 rounded-2xl bg-opacity-60 border-2 border-red-500  text-base font-bold opacity-80">
                Alias Not Available
              </span>
            )
          }

    </div>
  )
}

export default Home