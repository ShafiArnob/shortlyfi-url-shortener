import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import { db } from "./config";

export const createUrl = async(data) => {
  const docRef = await addDoc(collection(db, "urls"), data);
  return docRef
}

