import { useContext, useState } from "react";
import { SIDEBAR_CONTEXT } from "../App";
import {AiOutlineClose} from "react-icons/ai"
const Sidebar = () => {
  // const [click, setClicked] = useState(true);

  const {toggleSidebar, setToggleSidebar} = useContext(SIDEBAR_CONTEXT)


  return (
    <div>
      
      <div className='relative min-w-[100vw]'>
        {/* sidebar container */}
        <div className={`${toggleSidebar? 'right-0' : '-right-96'} fixed p-4 top-0 text-white h-full bg-[#1b1c30]   transition-all duration-500 ease-out z-30 `}>
          {/* header */}
          <div className="flex justify-between items-center my-4">
            <h2 className="text-2xl font-bold text-purple-400">Your recent URLs</h2>
            <button onClick={()=>setToggleSidebar(prev=>!prev)} className="hover:text-red-500 text-xl font-bold p-1 rounded-xl "><AiOutlineClose/></button>
          </div>
          {/* Body */}
          <div>
            <div className="p-4 my-3 max-w-xs bg-[#252740] rounded-2xl">
              <p className="overflow-hidden truncate">URl 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium quisquam blanditiis dolores sapiente autem! Deserunt perspiciatis odio quam inventore.</p>
            </div>
            <div className="p-4 max-w-xs bg-[#252740] rounded-2xl">
              <p>URl 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar