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
    <div className="h-[100vh] flex flex-col justify-center items-center">

      <div>
        <div className="flex space-x-4">
          <p>Long URL: {url.longUrl}</p>
          <button className="bg-red-500 px-3 py-1">Copy</button>
        </div>

        <div className="flex space-x-4">
          <p>Short URL: {url.shortUrl}</p>
          <button className="bg-red-500 px-3 py-1">Copy</button>
        </div>

        <div>
          <p>Visited: {url.visited}</p>
        </div>
      </div>

    </div>
  )
}

export default Stats