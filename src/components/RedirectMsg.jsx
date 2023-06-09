/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { BASE_URL } from "../constant/urlConstant"

export const RedirectMsg = ({message, state}) => {
  return (
    <div className="flex justify-center items-center  h-[100vh] ">
      <div className="w-11/12  max-w-md">
        <Link to={BASE_URL}>
          <h2 className="text-3xl text-[#ad8fff] font-bold pb-3">Shortyfi</h2>
        </Link>
        <h1 className="text-5xl text-gray-300 md:text-6xl">{message}</h1>
      </div>
    </div>
  )
}
