/* eslint-disable no-unused-vars */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from "../constant/urlConstant";
import { createUrl, getUrl } from "../firebase/firebaseFunctions";
import { ScaleLoader } from "react-spinners";

const Home = () => {
  const [longUrl, setLongUrl] = useState('')
  const [alias, setAlias] = useState('')
  const [urlExists, setUrlExists] = useState(false)
  const [loader, setLoader] = useState(false)
  
  //check if long url has http or https in front
  const checkHttp = (url) => {
    if(url.includes('http://') || url.includes('https://')){
      return true
    }
    return false
  }
  //generates short URL using alias or uuid first 6 chars
  const generateShortUrl = (alias = '') => {
    let url;
    if(!alias){
      url = BASE_URL + uuidv4().split("", 6).join("")
    }
    else{
      url = BASE_URL + alias
    }
    return url
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoader(true)
    const urlIncludesHttp = checkHttp(longUrl)
    if(!urlIncludesHttp){
      setLongUrl(`http://${longUrl}`)
    } 
    const data = {
      longUrl: longUrl,
      shortUrl: alias ? generateShortUrl(alias) : generateShortUrl(),
      visited: 0
    }
    
    //check if short url exists or not
    const checkUrlExists = await getUrl(data.shortUrl)
    
    //if does not exists sets error 
    if(Object.keys(checkUrlExists).length > 0){
      setUrlExists(true)
      setLoader(false)
    }
    //else creates URL
    else{
      const res = await createUrl(data);
      //opens new tab to stats page of the newly created short url
      if(res){
        setLoader(false)
        window.open(`${data.shortUrl}/stats`);
      }
    }
  }

  return (
    <div className="h-[100vh]  flex flex-col justify-center items-center">
      {/* form container */}
      <div className="bg-[#1b1c30] p-8 w-11/12  max-w-sm rounded-2xl z-20 opacity-85 border-t-2 border-l-2 border-[#7b54e9] border-opacity-30 ">
        <form onSubmit={handleSubmit} action="" className="flex flex-col space-y-4">
          <h1 className="text-3xl text-[#ad8fff] font-bold pb-3">Shortyfi</h1>    
          <div className="p-2 py-4 rounded-2xl bg-[#252740] ">
            {/* <p>Enter Long URL</p> */}
            <input type="text" pattern="[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=-]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)" title="Enter valid Link" className="mx-2 w-full focus:outline-none  text-gray-300 bg-[#252740] " placeholder="Enter Long URL" onChange={e=>setLongUrl(e.target.value)} value={longUrl}/>
          </div>

          <div className="p-2  py-4 rounded-2xl bg-[#252740]">
            {/* <p>Enter Long URL</p> */}
            <input type="text" pattern="^[^/]*$" title="Enter Valid Alias" className="mx-2 w-full focus:outline-none text-gray-300 bg-[#252740]" placeholder="alias (optional)" onChange={e=>setAlias(e.target.value)} value={alias}/>
          </div>

          <button className=" p-2 rounded-2xl py-3 bg-[#7b54e9] hover:bg-[#6143b6]">
            {
              loader ? <ScaleLoader color="#9ca3af" height={10}/> : "Generate" 
            }
          </button>
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