import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUrl } from "../firebase/firebaseFunctions";
import { BASE_URL } from "../constant/urlConstant";

const Stats = () => {
  let { id } = useParams();
  const [url, setUrl] = useState({})

  useEffect( ()=>{

    async function unsub() {
      const res = await getUrl(BASE_URL+id)
      setUrl(res);
    }

    return () => unsub()

  }, [id])
  return (
    <div className="h-[100vh]  flex flex-col justify-center items-center">

      <div className="space-y-3 bg-[#1b1c30] p-8 w-1/3 rounded-2xl z-20 opacity-85 border-t-2 border-l-2 border-[#7b54e9] border-opacity-30">
        <div className="flex justify-between">
          <h1 className="text-3xl text-[#ad8fff] font-bold pb-3">Shortlyfi</h1>

          <div className="ml-1 flex items-center space-x-4">
            <p className="font-bold text-xl text-gray-400">Visited</p>
            <span className="font-bold text-lg text-gray-300 bg-[#252740] px-2 py-1 rounded-lg">{url.visited}</span>
          </div>

        </div> 
        
        <div className="space-y-1">
          <p className="ml-1 text-lg text-gray-400 font-semibold">Long URL</p>
          <div className="flex rounded-2xl bg-[#252740] overflow-hidden">
            <input type="text" value={url.longUrl} className="p-2 py-4 mx-2 w-full focus:outline-none  text-gray-300 bg-[#252740]" disabled/>
            <button className="m-2 rounded-xl bg-[#7b54e9] hover:bg-[#6143b6] px-3 py-1">Copy</button>
          </div>
        </div>

        <div className="space-y-1">
          <p className="ml-1 text-lg text-gray-400 font-semibold">Short URL</p>
          <div className="flex rounded-2xl bg-[#252740] overflow-hidden">
            <input type="text" value={url.shortUrl} className="p-2 py-4 mx-2 w-full focus:outline-none  text-gray-300 bg-[#252740] " disabled/>
            <button className="m-2 rounded-xl bg-[#7b54e9] hover:bg-[#6143b6] px-3 py-1">Copy</button>
          </div>
        </div>

        
      </div>

    </div>
  )
}

export default Stats