import { useParams } from "react-router-dom";
import { getUrl } from "../firebase/firebaseFunctions";
import { BASE_URL } from "../constant/urlConstant";
import { useEffect, useState } from "react";

const Redirect = () => {
  let { id } = useParams();
  const [url, setUrl] = useState({})

  useEffect( ()=>{

    async function unsub() {
      const res = await getUrl(BASE_URL+id)
      setUrl(res);
    }

    return () => unsub()

  }, [id])

  // Checks if URL Exists 
  if(url instanceof Error){
    return <h1>Url Not Found</h1>
  }

  //Loading Meanwhile data is fetched
  if(Object.keys(url).length===0){
    return <h1>Loading...</h1>
  }

  //Redirect to long URL  
  if(url.longUrl){
    window.location.replace(url.longUrl);
  }
  
  //While redirecting
  return (
    <div>Redirect</div>
  )
}

export default Redirect