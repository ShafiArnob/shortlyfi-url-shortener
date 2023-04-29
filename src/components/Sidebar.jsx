import { useContext, useEffect, useState} from "react";
import { SIDEBAR_CONTEXT } from "../App";
import {AiOutlineClose} from "react-icons/ai"
import { getUrlsByUser } from "../firebase/firebaseFunctions";
const Sidebar = () => {
  // const [click, setClicked] = useState(true);

  const {toggleSidebar, setToggleSidebar} = useContext(SIDEBAR_CONTEXT)
  const [urlData, setUrlData] = useState([])

  useEffect(()=>{
    async function getUrlsData(){
      const userId = document.cookie.split(';').find(c=>c.includes('user'))?.split('=')[1]
      // console.log(userId);
      let urls
      if(userId){
        urls = await getUrlsByUser(userId)
        // console.log(urls);
        setUrlData(urls)
      }
    }
    getUrlsData()
  }, [])
  return (
    <div>
      <div className='relative min-w-[100vw]'>
        {/* sidebar container */}
        <div className={`${toggleSidebar? 'right-0' : '-right-96'} fixed p-4 top-0 text-white h-full bg-[#1b1c30]   transition-all duration-500 ease-out z-30 `}>
          {/* header */}
          <div className="flex justify-between items-center my-4">
            <h2 className="text-2xl font-bold text-[#ad8fff]">Your recent URLs</h2>
            <button onClick={()=>setToggleSidebar(prev=>!prev)} className="hover:text-red-500 text-xl font-bold p-1 rounded-xl "><AiOutlineClose/></button>
          </div>
          {/* Body */}
          <div>
            {urlData.length==0 && <h3 className="text-xl font-bold text-red-400">No URLs Set</h3>}
            { urlData && urlData?.map(url=>(
                  <div key={url.id} className="p-4 my-3 max-w-xs bg-[#252740] text-gray-200 rounded-2xl">
                    <p className="overflow-hidden text-xs"><span className="text-base font-semibold">{url.shortUrl}</span></p>
                    <p className="overflow-hidden truncate text-xs"> Long Url: <span className="text-xs font-semibold">{url.longUrl}</span></p>
                  </div>
            ))
                
            }
            {/* <div className="p-4 my-3 max-w-xs bg-[#252740] rounded-2xl">
              <p className="overflow-hidden truncate">Hello</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar