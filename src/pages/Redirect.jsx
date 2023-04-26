import { useParams } from "react-router-dom";
import { getUrl, incrementVisitedUrl } from "../firebase/firebaseFunctions";
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
  
  //*Redirect function
  const redirectToUrl = async() =>{
    await incrementVisitedUrl(url.id, url.visited)
    window.location.replace(url.longUrl);
  }

  //* Checks if URL Exists 
  if(url instanceof Error){
    return <h1>Url Not Found</h1>
  }
  
  //*Loading Meanwhile data is fetched
  if(Object.keys(url).length===0){
    return <h1>Loading...</h1>
  }

  //*Redirect to long URL  
  if(url.longUrl){
    redirectToUrl()
  }
  
  //*While redirecting
  return (
    <div>Redirecting</div>
  )
}

export default Redirect