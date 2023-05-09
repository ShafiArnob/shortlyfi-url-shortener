import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUrl } from "../firebase/firebaseFunctions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {TiTick} from 'react-icons/ti'
import { BASE_URL } from "../constant/urlConstant";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { SIDEBAR_CONTEXT } from "../App";
import Sidebar from "../components/Sidebar";

const Stats = () => {
  let { id } = useParams();
  const [url, setUrl] = useState({})
  const [copied, setCopied] = useState(false)

  const {setToggleSidebar} = useContext(SIDEBAR_CONTEXT)

  useEffect( ()=>{
    document.title = 'Stats | Shortyfi';
    async function unsub() {
      const res = await getUrl(BASE_URL+id)
      setUrl(res);
    }
    unsub()
  }, [id])

  //Toast
  const notify = () => toast.success('Copied To Clipboard !', {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="h-[89vh] ">

      <div className="flex justify-center items-center p-4 ">
        <div className="bg-transparent hover:bg-[#7b54e9]  text-[#7b54e9] font-semibold hover:text-white py-0 px-4 border border-[#7b54e9] hover:border-transparent rounded-full">
          <button className="p-2" onClick={()=>setToggleSidebar(prev=>!prev)}>My Urls</button>
        </div>
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-11/12  max-w-sm space-y-3 bg-[#1b1c30] p-8 rounded-2xl z-20 opacity-85 border-t-2 border-l-2 border-[#7b54e9] border-opacity-30">
          <div className="flex justify-between">
            <Link to={BASE_URL}>
              <h1 className="text-3xl text-[#ad8fff] font-bold pb-3 cursor-pointer">Shortyfi</h1>
            </Link>

            <div className="ml-1 flex items-center space-x-4">
              <p className="font-bold text-xl text-gray-400">Visited</p>
              <span className="font-bold text-lg text-gray-300 bg-[#252740] px-2 py-1 rounded-lg">{url.visited}</span>
            </div>

          </div> 

          <div className="space-y-1">
            <p className="ml-1 text-lg text-gray-400 font-semibold">Long URL</p>
            <div className="flex rounded-2xl bg-[#252740] overflow-hidden">
              <input type="text" value={url.longUrl} className="p-2 py-4 mx-2 w-full focus:outline-none  text-gray-300 bg-[#252740]" disabled/>
              {/* <button className="m-2 rounded-xl bg-[#7b54e9] hover:bg-[#6143b6] px-3 py-1">Copy</button> */}
            </div>
          </div>

          <div className="space-y-1">
            <p className="ml-1 text-lg text-gray-400 font-semibold">Short URL</p>
            <div className="flex rounded-2xl bg-[#252740] overflow-hidden">
              <input type="text" value={url.shortUrl} className="p-2 py-4 mx-2 w-full focus:outline-none  text-gray-300 bg-[#252740] " disabled/>
              <CopyToClipboard text={url.shortUrl} onCopy={() => setCopied(true)}>
                <button onClick={notify} title="Copy to Clipboard" className="m-2 rounded-xl bg-[#7b54e9] hover:bg-[#6143b6] px-3 py-1 ">{copied ? <TiTick/> : <span className="transition-all delay-75 duration-300">Copy</span>}</button>
              </CopyToClipboard>
            </div>
          </div>


        </div>
      </div>
    <Sidebar/>
    </div>
  )
}

export default Stats