import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import { db } from "./config";

export const createUrl = async(data) => {
  const docRef = await addDoc(collection(db, "urls"), data);
  return docRef
}

export const getUrl = async(shortUrl) =>{
  let tempObj = {}

  const q = query(collection(db, "urls"), where("shortUrl", "==", shortUrl));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    tempObj = {id:doc.id, ...doc.data()}
  });
  // console.log(tempObj);
  if(Object.keys(tempObj).length){
    return tempObj
  }
  else{
    return new Error("URL Not Found")
  }
}

// increments visited page if redirected
export const incrementVisitedUrl = () =>{
  
} 