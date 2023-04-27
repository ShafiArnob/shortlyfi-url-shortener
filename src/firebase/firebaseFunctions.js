import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"; 
import { db } from "./config";

//create the URL to DB
export const createUrl = async(data) => {
  const docRef = await addDoc(collection(db, "urls"), data);
  return docRef
}

//get the url from the DB
export const getUrl = async(shortUrl) =>{
  let tempObj = {}

  const q = query(collection(db, "urls"), where("shortUrl", "==", shortUrl));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
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
export const incrementVisitedUrl = async (id, prevVisited) =>{
  const ref = doc(db, "urls", id);
  //update only the visited page
  await updateDoc(ref, {
    visited: ++prevVisited
  });
} 