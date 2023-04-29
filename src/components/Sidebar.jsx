import { useContext, useState } from "react";
import { SIDEBAR_CONTEXT } from "../App";

const Sidebar = () => {
  // const [click, setClicked] = useState(true);

  const {toggleSidebar} = useContext(SIDEBAR_CONTEXT)


  return (
    <div>
      {/* <div className={` ${click? 'fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 cursor-pointer transition-all duration-500 ease-out' : 'bg-transparent'}`} id="overlay" onClick={pageclick}></div> */}

      <div className='relative min-w-[100vw]'>
        {/* sidebar container */}
        <div className={`${toggleSidebar? 'right-0' : '-right-96'} fixed p-4 top-0 text-white h-full bg-[#1b1c30]   transition-all duration-500 ease-out z-30 `}>
          {/* header */}
          <div className="my-4">
            <h2 className="text-xl font-bold">Your recent URLs</h2>
          </div>
          {/* Body */}
          <div>
            <div className="p-4 my-3 max-w-xs bg-[#252740] rounded-2xl">
              <p className="">URl 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium quisquam blanditiis dolores sapiente autem! Deserunt perspiciatis odio quam inventore.</p>
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