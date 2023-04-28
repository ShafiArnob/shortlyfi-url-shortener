import { useParams } from "react-router-dom";
import { getUrl, incrementVisitedUrl } from "../firebase/firebaseFunctions";
import { BASE_URL } from "../constant/urlConstant";
import { useEffect, useState } from "react";
import { RedirectMsg } from "../components/RedirectMsg";

const Redirect = () => {
  let { id } = useParams();
  const [url, setUrl] = useState({})

  useEffect( ()=>{
    document.title = 'Redirecting | Shortyfi';
    async function unsub() {
      const res = await getUrl(BASE_URL+id)
      setUrl(res);
    }
    unsub()
  }, [id])
  
  // console.log(url);
  //*Redirect function
  const redirectToUrl = async() =>{
    await incrementVisitedUrl(url.id, url.visited)
    // window.location.replace(url.longUrl);
    window.location.href = url.longUrl;
  }

  //* Checks if URL Exists 
  if(url instanceof Error){
    return <RedirectMsg message={"URL Not Found"}/>
  }
  
  //*Loading Meanwhile data is fetched
  if(Object.keys(url).length===0){
    return <RedirectMsg message={"Finding URL"}/>

  }

  //*Redirect to long URL  
  if(url.longUrl){
    redirectToUrl()
  }
  
  //*While redirecting
  return (
    <RedirectMsg message={"Redirecting..."}/>
  )
}

export default Redirect